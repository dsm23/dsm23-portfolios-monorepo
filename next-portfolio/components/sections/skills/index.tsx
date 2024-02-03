import type { FunctionComponent, HTMLAttributes } from "react";
import Link from "next/link";
import Section from "~/components/section";
import Tooltip from "~/components/tooltip";
import { cn } from "~/utils";
import type { Maybe, Skill } from "@/generated";

import { skillsStyles as styles } from "@/shared-styles";

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
    <div className="flex flex-wrap items-baseline">
      {skills.map((item) => (
        <Link
          href={`/skill/${item?.slug}`}
          className="group"
          key={`skills-${item?.skillName}`}
        >
          <span className="sr-only">{item?.skillName}</span>

          <div
            className={cn(
              styles.iconWrapper,
              "h-16 w-16 text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400",
            )}
            dangerouslySetInnerHTML={{
              __html: item?.svg as string,
            }}
          />

          <Tooltip>{item?.skillName}</Tooltip>
        </Link>
      ))}
    </div>
  </Section>
);

export default Skills;
