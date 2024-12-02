import type { FunctionComponent, HTMLAttributes } from "react";
import { tooltipStyles as styles } from "@repo/shared-styles";
import { cn } from "~/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const Tooltip: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => (
  <div
    data-tip-position="top"
    {...props}
    inert
    role="tooltip"
    className={cn(styles.tooltip, className)}
  >
    {children}
  </div>
);

export default Tooltip;
