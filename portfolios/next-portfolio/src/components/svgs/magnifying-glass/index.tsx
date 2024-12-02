import type { FunctionComponent, SVGAttributes } from "react";
import { cn } from "~/utils";

type Props = SVGAttributes<SVGSVGElement>;

const MagnifyingGlass: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    className={cn("h-6 w-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

export default MagnifyingGlass;
