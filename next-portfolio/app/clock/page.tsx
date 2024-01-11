import { Anchor, ClockFace, Main, StyledGoBack } from "~/components";

const Page = () => (
  <Main className="w-full px-6 py-8">
    <StyledGoBack className="mb-4" href="/#projects" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">Clock</h1>
    <p>
      A SVG clock example cloned from{" "}
      <Anchor href="https://svelte.dev/examples/clock">svelte.dev</Anchor>
    </p>

    <div className="container mx-auto">
      <ClockFace />
    </div>
  </Main>
);

export default Page;
