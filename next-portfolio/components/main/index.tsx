import { forwardRef } from "react";
import type { ComponentProps, ElementType, ReactElement, Ref } from "react";
import { cn } from "~/utils";

export type PlymorphicProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
};

export type Props<E extends ElementType> = PlymorphicProps<E> &
  Omit<ComponentProps<E>, keyof PlymorphicProps>;

const defaultElement = "main";

const Main = forwardRef(
  (
    { as: Component = defaultElement, className, ...props }: PlymorphicProps,
    ref: Ref<Element>,
  ) => (
    <Component
      className={cn("mt-20 lg:mt-0", className)}
      ref={ref}
      {...props}
    />
  ),
) as { displayName: string } & (<E extends ElementType = typeof defaultElement>(
  props: Props<E>,
) => ReactElement);

Main.displayName = "Main";

export default Main;
