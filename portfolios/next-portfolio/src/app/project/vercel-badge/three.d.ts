import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import type { ReactThreeFiber } from "@react-three/fiber";

// https://r3f.docs.pmnd.rs/api/objects#declaring-objects
// https://r3f.docs.pmnd.rs/tutorials/typescript#typing-shorthand-props
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       meshLineGeometry: ReactThreeFiber.Object3DNode<
//         MeshLineGeometry,
//         typeof MeshLineGeometry
//       >;
//       meshLineMaterial: ReactThreeFiber.Object3DNode<
//         MeshLineMaterial,
//         typeof MeshLineMaterial
//       >;
//     }
//   }
// }

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: ReactThreeFiber.Node<
      MeshLineGeometry,
      typeof MeshLineGeometry
    >;
    meshLineMaterial: ReactThreeFiber.Node<
      MeshLineMaterial,
      typeof MeshLineMaterial
    >;
  }
}
