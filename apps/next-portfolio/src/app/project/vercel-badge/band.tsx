// TODO: sort out the types
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import type { FunctionComponent } from "react";
import {
  extend,
  useThree,
  useFrame,
  type EventHandlers,
} from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  type RigidBodyOptions,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import type { GLTF } from "three-stdlib";

type Props = {
  maxSpeed?: number;
  minSpeed?: number;
};

type GLTFResult = GLTF & {
  nodes: {
    base: THREE.Mesh;
    card: THREE.Mesh;
    clamp: THREE.Mesh;
    clip: THREE.Mesh;
    metal: THREE.Mesh;
  };
  materials: {
    base: THREE.MeshStandardMaterial;
    card: THREE.MeshStandardMaterial;
    clamp: THREE.MeshStandardMaterial;
    clip: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
  };
};

extend({ MeshLineGeometry, MeshLineMaterial });

useGLTF.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb",
);
useTexture.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg",
);

const Band: FunctionComponent<Props> = ({ maxSpeed = 50, minSpeed = 10 }) => {
  const band = useRef<THREE.Mesh>(null);
  // This is not the idiomatic way to type this, that would be
  // const fixed = useRef<RapierRigidBody>(null);
  // the parameter from useRopeJoint is refusing null, this:
  const fixed = useRef<RapierRigidBody>({} as RapierRigidBody);
  const j1 = useRef<RapierRigidBody>({} as RapierRigidBody);
  const j2 = useRef<RapierRigidBody>({} as RapierRigidBody);
  const j3 = useRef<RapierRigidBody>({} as RapierRigidBody);
  const card = useRef<RapierRigidBody>({} as RapierRigidBody);
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyOptions = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  };
  const { nodes, materials } = useGLTF(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb",
  ) as GLTFResult;
  const texture = useTexture(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg",
  );
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );
  const [dragged, drag] = useState<THREE.Vector3 | boolean>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => void (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      if (dragged instanceof THREE.Vector3) {
        card.current?.setNextKinematicTranslation({
          x: vec.x - dragged.x,
          y: vec.y - dragged.y,
          z: vec.z - dragged.z,
        });
      }
    }
    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      [j1, j2].forEach((ref) => {
        if (!ref.current?.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current?.translation(),
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(
            1,
            ref.current.lerped.distanceTo(ref.current?.translation()),
          ),
        );
        ref.current.lerped.lerp(
          ref.current?.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      // Calculate catmul curve

      curve.points[0].copy(j3.current?.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current?.translation());

      band.current?.geometry.setPoints(curve.getPoints(32));

      // Tilt it back towards the screen
      ang.copy(card.current!.angvel());
      rot.copy(card.current!.rotation());
      card.current!.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const handlePointerUp: EventHandlers["onPointerUp"] = (event) => {
    event?.target?.releasePointerCapture(event.pointerId);
    drag(false);
  };

  const handlePointerDown: EventHandlers["onPointerDown"] = (event) => {
    event?.target?.setPointerCapture(event.pointerId);
    drag(
      new THREE.Vector3()
        .copy(event.point)
        .sub(vec.copy(card.current?.translation())),
    );
  };

  return (
    <>
      <group position={new THREE.Vector3(0, 4, 0)}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => {
              hover(true);
            }}
            onPointerOut={() => {
              hover(false);
            }}
            onPointerUp={handlePointerUp}
            onPointerDown={handlePointerDown}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={new THREE.Vector2(width, height)}
          useMap={1}
          map={texture}
          repeat={new THREE.Vector2(-3, 1)}
          lineWidth={1}
        />
      </mesh>
    </>
  );
};

export default Band;
