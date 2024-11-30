import Link from "next/link";
import type { Metadata } from "next";
import Anchor from "~/components/anchor";
import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";

export const metadata: Metadata = {
  title: "David Murdoch Portfolio - Next.js | Date",
  description: "svelte.dev clock example in Next.js",
  openGraph: {
    title: "David Murdoch Portfolio - Next.js | Date",
    description: "svelte.dev clock example in Next.js",
  },
};

const Page = () => (
  <Main className="w-full px-6 py-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/project/clock/page.tsx" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">
      Timestamp Microservice
    </h1>

    <p>
      This is an example backend microservice inspired by{" "}
      <Anchor
        href="https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice"
        rel="noopener noreferrer"
        target="_blank"
      >
        freeCodeCamp
      </Anchor>
    </p>

    <div className="container mx-auto mt-10">
      <h2>Example Usage:</h2>
      <ul>
        <li>
          <Anchor as={Link} href="/project/date/2015-12-25">
            [project url]/project/date/2015-12-25
          </Anchor>
        </li>
        <li>
          <Anchor as={Link} href="/project/date/1451001600000">
            [project url]/project/date/1451001600000
          </Anchor>
        </li>
        <li>
          <Anchor as={Link} href="/project/date/now">
            [project url]/project/date/now
          </Anchor>
        </li>
      </ul>

      <h2>Example Output:</h2>
      <p>
        <code>
          {JSON.stringify({
            unix: 1451001600000,
            utc: "Fri, 25 Dec 2015 00:00:00 GMT",
          })}
        </code>
      </p>
    </div>
  </Main>
);

export default Page;
