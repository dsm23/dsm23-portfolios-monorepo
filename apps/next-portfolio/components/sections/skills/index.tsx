import type { FunctionComponent, HTMLAttributes } from "react";
import Link from "next/link";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import { cn } from "~/utils";
import type { Maybe, Skill } from "@repo/generated";

import { skillsStyles as styles } from "@repo/shared-styles";

interface Props extends HTMLAttributes<HTMLElement> {
  skills: Maybe<
    Skill & {
      svg: string;
    }
  >[];
}

const Skills: FunctionComponent<Props> = ({ skills = [], ...props }) => (
  <Section {...props}>
    <h2 className="text-5xl">Skills</h2>
    <div className="flex flex-wrap items-baseline print:gap-2">
      {skills.map((item) => (
        <Link
          href={`/skill/${item?.slug}`}
          className="group print:grid print:justify-items-center"
          key={`skills-${item?.skillName}`}
        >
          <div
            className={cn(
              styles.iconWrapper,
              "h-16 w-16 text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400",
            )}
            dangerouslySetInnerHTML={{
              __html: item?.svg as string,
            }}
          />

          <div className="sr-only print:not-sr-only print:block">
            {item?.skillName}
          </div>

          <Tooltip>{item?.skillName}</Tooltip>
        </Link>
      ))}
    </div>
  </Section>
);

export default Skills;
