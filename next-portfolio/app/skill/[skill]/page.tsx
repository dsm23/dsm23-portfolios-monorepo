import type { FunctionComponent } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  EmptyStar,
  FilledStar,
  Main,
  StyledGoBack,
  ViewSource,
} from "~/components";
import { getSkillBySlug } from "~/utils/api";
import { contentfulOptions, sleep } from "~/utils";

type Props = {
  params: {
    skill: string;
  };
};

const Page: FunctionComponent<Props> = async ({ params }) => {
  const [skill] = await Promise.all([getSkillBySlug(params.skill), sleep(300)]);

  const skillName = skill?.skillName;
  const content = skill?.content;
  const rating = skill?.rating as number;

  return (
    <Main className="w-full px-6 py-8">
      <StyledGoBack className="mb-4" href="/#skills" />
      <ViewSource pathname="app/skill/[skill]/page.tsx" />

      <h1 className="text-4xl text-sky-700">{skillName}</h1>
      <div className="mb-4">
        {documentToReactComponents(content?.json, contentfulOptions)}
      </div>

      <div className="flex">
        <h2 className="tracking-widest text-sky-600">PROFICIENCY:</h2>

        {Array.from({ length: rating }).map((_, i) => (
          <FilledStar className="h-6 w-6" key={`filled-star-${i}`} />
        ))}

        {Array.from({ length: 5 - rating }).map((_, i) => (
          <EmptyStar className="h-6 w-6" key={`empty-star-${i}`} />
        ))}
      </div>
    </Main>
  );
};

export default Page;
