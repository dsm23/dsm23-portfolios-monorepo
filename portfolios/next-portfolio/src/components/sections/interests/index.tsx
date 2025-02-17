import type { FunctionComponent, HTMLAttributes } from "react";
import type { Maybe, Interests as TypeInterests } from "@repo/generated";
import Section from "~/components/section";

interface Props extends HTMLAttributes<HTMLElement> {
  interests?: Maybe<TypeInterests>[];
}

const Interests: FunctionComponent<Props> = ({ interests = [], ...props }) => (
  <Section {...props}>
    <h2 className="text-5xl">Interests</h2>
    <ul className="list-inside list-disc">
      {interests.map((interest) => (
        <li key={`interest-${interest?.interest}`} className="ml-4">
          {interest?.interest}
        </li>
      ))}
    </ul>
  </Section>
);

export default Interests;
