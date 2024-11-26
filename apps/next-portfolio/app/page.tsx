import { Maybe, Skill } from "@repo/generated";
import Divisor from "~/components/divisor";
import Main from "~/components/main";
import {
  Download,
  Education,
  Experience,
  Home,
  Interests,
  Projects,
  Skills,
} from "~/components/sections";
import ViewSource from "~/components/view-source";
import { getHomePageQuery } from "~/utils/api";

const fetchSvg = async (url: string) => {
  const res = await fetch(url, {
    headers: new Headers({
      Accept: "image/svg+xml",
    }),
  });

  return await res.text();
};

const Page = async () => {
  const data = await getHomePageQuery();

  const author = data?.person;
  const education = data?.education;
  const experience = data?.experience;
  const interests = data?.interests;

  const promises =
    data?.skills?.map(
      async (skill) =>
        ({
          ...skill,
          svg: await fetchSvg(skill?.icon?.url as string),
        }) as Maybe<Skill & { svg: string }>,
    ) ?? [];

  const skills = await Promise.all(promises);

  return (
    <Main className="w-full px-6 py-8">
      <ViewSource pathname="app/page.tsx" />

      <h1 className="sr-only">David Murdoch{"'"}s Portfolio</h1>

      <Home author={author} />

      <Divisor />
      <Experience id="experience" experience={experience} />

      <Divisor />
      <Education id="education" education={education} />

      <Divisor />
      <Skills id="skills" skills={skills} />

      <Divisor />
      <Projects id="projects" />

      <Divisor />
      <Interests id="interests" interests={interests} />

      <Divisor />
      <Download id="download" />
    </Main>
  );
};

export default Page;
