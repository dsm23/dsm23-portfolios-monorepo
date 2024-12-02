import { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "~/utils";

type Props = HTMLAttributes<HTMLHeadingElement>;

const SectionHeader: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => (
  <h2
    {...props}
    className={cn("text-6xl font-medium text-gray-900", className)}
  >
    {children}
  </h2>
);

export default SectionHeader;
