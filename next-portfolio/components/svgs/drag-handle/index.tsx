import type { FunctionComponent, SVGAttributes } from "react";
import { cn } from "~/utils";

type Props = SVGAttributes<SVGSVGElement>;

const DragHandle: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    className={cn("h-6 w-6", className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 4.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm4 0a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM10.625 7.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM5.5 8.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm5.125 2.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM5.5 12.625a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default DragHandle;
