import type { FunctionComponent, HTMLAttributes } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Section from "~/components/section";
import { cn, contentfulOptions, formatYears } from "~/utils";
import type { EducationSchool, Maybe } from "@/generated";

import { educationStyles as styles } from "@/shared-styles";

interface Props extends HTMLAttributes<HTMLElement> {
  education?: Maybe<EducationSchool>[];
}

const Education: FunctionComponent<Props> = ({ education = [], ...props }) => (
  <Section {...props}>
    <h2 className="text-5xl">Education</h2>

    {education.map((school) => (
      <div className={styles.container} key={`education-${school?.schoolName}`}>
        <h3 className={styles.school}>{school?.schoolName}</h3>
        {school?.description && (
          <div className={styles.description}>
            {documentToReactComponents(
              school?.description.json,
              contentfulOptions,
            )}
          </div>
        )}

        <div className={cn(styles.dates, "text-sky-900 dark:text-sky-300")}>
          {formatYears(school?.startDate as string, school?.endDate as string)}
        </div>
      </div>
    ))}
  </Section>
);

export default Education;
