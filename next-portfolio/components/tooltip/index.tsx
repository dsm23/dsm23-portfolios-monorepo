import type { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "~/utils";

import { tooltipStyles as styles } from "@/shared-styles";

type Props = HTMLAttributes<HTMLDivElement>;

const Tooltip: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => (
  <div
    data-tip-position="top"
    {...props}
    {...{ inert: true }}
    role="tooltip"
    className={cn(styles.tooltip, className)}
  >
    {children}
  </div>
);

export default Tooltip;
