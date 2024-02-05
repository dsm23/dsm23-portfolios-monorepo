import type { FunctionComponent, SVGAttributes } from "react";
import { cn } from "~/utils";

type Props = SVGAttributes<SVGSVGElement>;

const NavRight: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={cn("h-6 w-6", className)}
  >
    <path fill="currentColor" d="M2 3l20 9-20 9 5-9-5-9z" />
  </svg>
);

export default NavRight;
