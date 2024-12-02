import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";
import VercelBadge from "./badge";

export const metadata: Metadata = {
  title: "David Murdoch Portfolio - Next.js | Date",
  description: "svelte.dev clock example in Next.js",
  openGraph: {
    title: "David Murdoch Portfolio - Next.js | Date",
    description: "svelte.dev clock example in Next.js",
  },
};

// TODO: address height
const Page = () => (
  <Main className="h-4/5 w-full px-6 pt-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/project/vercel-badge/page.tsx" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">
      Vercel badge
    </h1>

    <p>
      This is a react-three-fiber example ported from a{" "}
      <Anchor
        href="https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber"
        rel="noopener noreferrer"
        target="_blank"
      >
        Vercel blog post
      </Anchor>{" "}
      with some TypeScript support.
    </p>

    <VercelBadge />
  </Main>
);

export default Page;
