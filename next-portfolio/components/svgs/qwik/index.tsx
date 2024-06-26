import type { FunctionComponent, SVGAttributes } from "react";
import cn from "~/utils/class-names";

type Props = SVGAttributes<SVGSVGElement>;

const Qwik: FunctionComponent<Props> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("h-6 w-6", className)}
  >
    <path d="M7.547 0a2.957 2.957 0 0 0-2.56 1.478L.532 9.191a2.957 2.957 0 0 0 0 2.957l4.453 7.713a2.955 2.955 0 0 0 2.561 1.477H12l8.594 2.648a.284.284 0 0 0 .336-.402l-1.916-3.723 4.453-7.713a2.957 2.957 0 0 0 0-2.957L19.014 1.48A2.957 2.957 0 0 0 16.453 0zm0 .766 10.185 9.904-1.896 1.899.578 7.533L6.268 10.67l2.37-2.373z" />
  </svg>
);

export default Qwik;
