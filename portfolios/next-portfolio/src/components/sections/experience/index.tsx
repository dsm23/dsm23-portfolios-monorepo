import type { FunctionComponent, HTMLAttributes } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { experienceStyles as styles } from "@repo/shared-styles";
import type { ExperienceCompany, Maybe } from "@repo/generated";
import Section from "~/components/section";
import { cn, contentfulOptions, formatYears } from "~/utils";

interface Props extends HTMLAttributes<HTMLElement> {
  experience?: Maybe<ExperienceCompany>[];
}

const Experience: FunctionComponent<Props> = ({
  experience = [],
  ...props
}) => (
  <Section {...props}>
    <h2 className="text-5xl">Experience</h2>

    {experience.map((company) => (
      <div
        className={styles.container}
        key={`experience-${company?.companyName}`}
      >
        <h3 className={styles.company}>{company?.companyName}</h3>
        <div className={styles.city}>{company?.city}</div>

        <div className={cn(styles.dates, "text-sky-900 dark:text-sky-300")}>
          {formatYears(
            company?.startDate as string,
            company?.endDate as string,
          )}
        </div>

        {company?.description && (
          <div className={styles.description}>
            {documentToReactComponents(
              company?.description.json,
              contentfulOptions,
            )}
          </div>
        )}
      </div>
    ))}
  </Section>
);

export default Experience;
