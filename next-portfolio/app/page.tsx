import { Divisor, Education, Interests, Main } from "~/components";
import { getHomePageQuery } from "~/utils/api";

const Page = async () => {
  const data = await getHomePageQuery();

  const education = data?.education;
  const interests = data?.interests;

  return (
    <Main className="w-full px-6 py-8">
      <h1 className="sr-only">David Murdoch{"'"}s Portfolio</h1>

      <Divisor />
      <Education id="education" education={education} />

      <Divisor />
      <Interests id="interests" interests={interests} />
    </Main>
  );
};

export default Page;
