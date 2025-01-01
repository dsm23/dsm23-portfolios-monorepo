import { forwardRef } from "react";
import type { ComponentProps, ElementType, ReactElement, Ref } from "react";
import { cn } from "~/utils";

export type PlymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
};

export type Props<E extends ElementType> = PlymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PlymorphicProps>;

const defaultElement = "a";

const Anchor = forwardRef(
  (
    { as: Component = defaultElement, className, ...props }: PlymorphicProps,
    ref: Ref<Element>,
  ) => (
    <Component
      // @ts-expect-error The typings on this polymorphic component are not sufficient. This is now just a demo component. Use the pattern from button in the future
      className={cn(
        "-mx-1 px-1 text-sky-900 underline underline-offset-2 outline-none hover:text-sky-600 focus:rounded focus:bg-yellow-500 dark:text-sky-300 dark:hover:text-sky-500",
        className,
      )}
      // @ts-expect-error The typings on this polymorphic component are not sufficient. This is now just a demo component. Use the pattern from button in the future
      ref={ref}
      {...props}
    />
  ),
) as { displayName: string } & (<E extends ElementType = typeof defaultElement>(
  props: Props<E>,
) => ReactElement);

Anchor.displayName = "Anchor";

export default Anchor;
