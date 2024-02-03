import type { FunctionComponent, HTMLAttributes } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Section from "~/components/section";
import { contentfulOptions, formatYears } from "~/utils";
import type { ExperienceCompany, Maybe } from "@/generated";

import { experienceStyles as styles } from "@/shared-styles";

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
        {company?.description && (
          <div className={styles.description}>
            {documentToReactComponents(
              company?.description.json,
              contentfulOptions,
            )}
          </div>
        )}

        <div className={styles.dates}>
          {formatYears(
            company?.startDate as string,
            company?.endDate as string,
          )}
        </div>
      </div>
    ))}
  </Section>
);

export default Experience;
