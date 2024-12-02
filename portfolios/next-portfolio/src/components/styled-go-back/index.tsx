import type { AnchorHTMLAttributes, FunctionComponent } from "react";
import type { LinkProps } from "next/link";
import { goBackStyles as styles } from "@repo/shared-styles";
import { Link } from "~/components/progress-bar/next";
import GoBack from "~/components/svgs/go-back";
import { cn } from "~/utils";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

export const StyledGoBack: FunctionComponent<Props> = ({
  className,
  ...props
}) => (
  <Link {...props} className={cn(styles.anchor, "w-min", className)}>
    <GoBack className={cn(styles.svg, "h-8 w-8")} aria-label="Go Back" />
  </Link>
);

export default StyledGoBack;
