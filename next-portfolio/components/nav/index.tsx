"use client";

import { useId, useRef } from "react";
import type {
  ButtonHTMLAttributes,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Hamburger from "~/components/hamburger";
import useClickOutside from "~/hooks/use-click-outside";

import { navStyles as styles } from "@/shared-styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  onToggle: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const Nav: FunctionComponent<Props> = ({
  children,
  open,
  onClose,
  onToggle,
  ...props
}) => {
  const id = useId();
  const container = useRef<HTMLDivElement>(null);

  useClickOutside(container, () => {
    onClose();
  });

  return (
    <div className={styles.container} ref={container} {...props}>
      <Link
        href="/#home"
        className="inline-flex items-center border-2 border-transparent shadow-sm outline-none focus:border-yellow-500 lg:mb-4 lg:mr-0 lg:rounded-full lg:border-8 lg:border-sky-700"
      >
        {/* <img
          src={profilePic()?.image?.url}
          className="aspect-square w-10 rounded-full object-cover lg:w-48"
          alt={profilePic()?.image?.description}
        /> */}

        <span className="ml-3 hidden text-xl font-bold tracking-wide text-white md:inline lg:hidden print:inline">
          David Murdoch
        </span>
        <span className="ml-3 inline text-xl font-bold tracking-wide text-white md:hidden print:hidden">
          DSM
        </span>
      </Link>
      <div className={styles.icon}>
        <button
          aria-label="Open the navigation menu"
          onClick={onToggle}
          className="flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
          aria-controls={id}
          aria-expanded={open}
        >
          <Hamburger className="h-6 w-6" open={open} />
        </button>
      </div>

      <nav aria-label="Primary" className={styles.sections}>
        <Transition
          show={open}
          className="grid md:hidden"
          enter="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
          enterFrom="grid-rows-[0fr]"
          enterTo="grid-rows-[1fr]"
          leave="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
          leaveFrom="grid-rows-[1fr]"
          leaveTo="grid-rows-[0fr]"
        >
          <div id={id} className="overflow-hidden">
            {children}
          </div>
        </Transition>
        <div className="hidden md:block">{children}</div>
      </nav>
    </div>
  );
};

export default Nav;
