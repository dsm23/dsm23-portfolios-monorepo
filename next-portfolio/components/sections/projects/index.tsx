import type { FunctionComponent, HTMLAttributes } from "react";
import Link from "next/link";
import Anchor from "~/components/anchor";
import Section from "~/components/section";
import Help from "~/components/svgs/help";
import NavRight from "~/components/svgs/nav-right";
import { internal } from "~/utils";

import { projectsStyles as styles } from "@/shared-styles";

interface Project {
  title: string;
  to: string;
  description: string;
}

type Props = HTMLAttributes<HTMLElement>;

const projects: Project[] = [
  {
    title: "This portfolio",
    to: "https://github.com/dsm23/dsm23-portfolios-monorepo",
    description: "The GitHub link to the source code of this portfolio",
  },
  {
    title: "IMH website",
    to: "https://nextjs-imh.vercel.app/",
    description:
      "A website for my parent's company. Built with Tailwind and Next.js and uses Contentful as a CMS",
  },
  {
    title: "Noughts and Crosses",
    to: "/noughts-and-crosses",
    description:
      "The tutorial example from the reactjs.org docs in tailwindcss stylings with TypeScript typings",
  },
  {
    title: "FizzBuzz",
    to: "/fizz-buzz",
    description:
      'Numbers 1 to 100 where any number divisible by three is replaced with the word "fizz", and any number divisible by five is replaced with the word "buzz"',
  },
  {
    title: "Clock",
    to: "/clock",
    description: "A SVG clock example cloned from svelte.dev",
  },
  {
    title: "Divisibles",
    to: "/divisibles",
    description: "Hover over numbers to show their divisors",
  },
  {
    title: "MathML",
    to: "/mathml",
    description:
      "An example from MDN showing the new MathML support in browsers",
  },
  {
    title: "Totally not XSS vulnerable",
    to: "https://totally-not-xss-vulnerable.netlify.app/",
    description:
      "An example of a XSS vulnerable site. A list of usernames and passwords are stored in IndexedDB and an example username in the form that can be used to print the list in a table",
  },
  {
    title: "Layout Proposal for Twitch Streamer I watch",
    to: "https://layout-proposal-for-austin.netlify.app/",
    description:
      "AustinShow uses a video call app to do a battle royale style show. During the elimination stage he introduces a bottom three stage that can sometimes be hard to follow",
  },
  {
    title: "D3.js pie chart",
    to: "/pie-chart",
    description: "Pie chart in svg using D3.js",
  },
  {
    title: "Todomvc with redux toolkit",
    to: "https://todomvc-reduX.netlify.app/",
    description:
      "The redux Todomvc example is quite old and states that it no longer uses recommended patterns. An example that ports to redux toolkit",
  },
  {
    title: "GitHub search from redux",
    to: "https://github-search-from-redux-example.netlify.app/",
    description:
      "The redux real world example is quite old and states that it no longer uses recommended patterns. An example that converts to redux toolkit (working but incomplete)",
  },
  {
    title: "Simple form",
    to: "/simple-form",
    description: "A simple form example using react-hook-form",
  },
  {
    title: "Thorpe Bay Yacht Club",
    to: "https://tbyc-astro-wordpress.netlify.app/",
    description:
      "An astro site that integrates with a wordpress backend used by a local yacht club",
  },
];

const Projects: FunctionComponent<Props> = async (props) => {
  // server-only
  const { default: urlMetadata } = await import("url-metadata");

  const projectsWithMetadata = (await Promise.all(
    projects.map(async ({ to, ...rest }) => {
      try {
        const websiteUrl = process.env.ORIGIN_URL as string;

        const url = internal(to) ? websiteUrl + to : to;

        const metadata = await urlMetadata(url, {
          mode: "same-origin",
        });

        return {
          ...rest,
          to,
          ogImage: metadata["og:image"] ?? metadata["twitter:image"],
          alt: metadata["og:image:alt"],
        };
      } catch (err) {
        return {
          ...rest,
          to,
        };
      }
    }),
  )) as (Project & { ogImage?: string; alt?: string })[];

  return (
    <Section {...props}>
      <h2 className="text-5xl">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {projectsWithMetadata.map(
          ({ title, to, description, ogImage, alt }) => (
            <div key={`project-${title}`}>
              <div className={styles.imgContainer}>
                {ogImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={ogImage}
                    className="absolute h-full w-full rounded-lg object-contain p-4 shadow-md"
                    alt={alt ?? "open graph image"}
                  />
                ) : (
                  <Help className="absolute h-full w-full rounded-lg object-cover shadow-md" />
                )}
              </div>
              <div className="isolate -mt-16 px-4 print:mt-0">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="flex items-baseline">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                      {internal(to) ? "internal" : "external"}
                    </div>
                  </div>
                  <Anchor
                    as={Link}
                    href={to}
                    className="dar:hover:text-sky-600 mt-2 flex items-center gap-x-2 dark:text-sky-900"
                  >
                    <NavRight className="h-6 w-6" />
                    <h3 className="truncate text-lg font-semibold leading-tight">
                      {title}
                    </h3>
                  </Anchor>
                  <div className="mt-3">
                    <p className="text-sm text-gray-900">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Section>
  );
};

export default Projects;
