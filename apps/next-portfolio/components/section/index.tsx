import type { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "~/utils";

import { sectionStyles as styles } from "@repo/shared-styles";

type Props = HTMLAttributes<HTMLElement>;

const Section: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section {...props} className={cn(styles.section, className)}>
      <div className={styles.centering}>
        <div className="min-w-full flex-grow-0 px-4 py-8 lg:flex-grow lg:px-32 lg:py-64">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
