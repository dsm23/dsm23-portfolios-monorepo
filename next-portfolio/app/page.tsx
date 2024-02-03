import {
  Divisor,
  Education,
  Experience,
  Home,
  Interests,
  Main,
} from "~/components";
import { getHomePageQuery } from "~/utils/api";

const Page = async () => {
  const data = await getHomePageQuery();

  const author = data?.person;
  const education = data?.education;
  const experience = data?.experience;
  const interests = data?.interests;

  return (
    <Main className="w-full px-6 py-8">
      <h1 className="sr-only">David Murdoch{"'"}s Portfolio</h1>

      <Home author={author} />

      <Divisor />
      <Experience id="experience" experience={experience} />

      <Divisor />
      <Education id="education" education={education} />

      <Divisor />
      <Interests id="interests" interests={interests} />
    </Main>
  );
};

export default Page;
