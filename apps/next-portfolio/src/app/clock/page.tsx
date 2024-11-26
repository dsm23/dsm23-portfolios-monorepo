import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import ClockFace from "~/components/clock";
import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";

export const metadata: Metadata = {
  title: "David Murdoch Portfolio - Next.js | Clock",
  description: "svelte.dev clock example in Next.js",
  openGraph: {
    title: "David Murdoch Portfolio - Next.js | Clock",
    description: "svelte.dev clock example in Next.js",
  },
};

const Page = () => (
  <Main className="w-full px-6 py-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/clock/page.tsx" />

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
