import type { FunctionComponent, SVGAttributes } from "react";
import { cn } from "~/utils";

type Props = SVGAttributes<SVGSVGElement>;

const FilledStar: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={cn("text-yellow-500", className)}
  >
    <path fill="currentColor" d="M12 2l3 7h7l-5 6 2 7-7-4-7 4 2-7-5-6h7l3-7z" />
  </svg>
);

export default FilledStar;
