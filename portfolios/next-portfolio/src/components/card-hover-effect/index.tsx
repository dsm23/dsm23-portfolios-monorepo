"use client";

import { useState } from "react";
import type {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import ArrowTopRightOnSquare from "~/components/svgs/arrow-top-right-on-square";
import { cn } from "~/utils";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card: FunctionComponent<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const HoverLink: FunctionComponent<Props> = ({
  children,
  className,
}) => {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <a
      className={cn(
        "group relative block h-full w-full cursor-pointer p-2 text-zinc-100",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isHover && (
          <motion.span
            className="absolute inset-0 block h-full w-full rounded-2xl bg-neutral-200 dark:bg-slate-800/[0.8]"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <Card>
        <div className="flex justify-between">
          {children}

          <ArrowTopRightOnSquare className="size-4" />
        </div>
      </Card>
    </a>
  );
};
