import type { FunctionComponent, HTMLAttributes } from "react";
import Anchor from "~/components/anchor";
import { Link } from "~/components/progress-bar/next";
import Section from "~/components/section";
import { internal } from "~/utils";

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
    to: "https://imh.davidmurdochconsulting.site/",
    description:
      "A website for my parent's company. Built with Tailwind and Next.js and uses Contentful as a CMS",
  },
  {
    title: "Parkrun Organiser Pacer Events",
    to: "https://parkrun.davidmurdochconsulting.site/",
    description:
      "A basic CRUD application with a supabase backend for individuals to declare they can volunteer as a pacer for a parkrun event",
  },
  {
    title: "Noughts and Crosses",
    to: "/project/noughts-and-crosses",
    description:
      "The tutorial example from the reactjs.org docs in tailwindcss stylings with TypeScript typings",
  },
  {
    title: "Timestamp Microservice",
    to: "/project/date",
    description:
      "This is an example backend microservice inspired by freeCodeCamp course but within Next.js",
  },
  {
    title: "Animal Farm",
    to: "/project/animal-farm",
    description:
      "The animal farm example from fireship pro reconfigured for Next.js and with TypeScript",
  },
  {
    title: "Drag and Resize",
    to: "/project/drag-and-resize",
    description:
      "Work in progess: attempting to re-create what Theo describes for the Twitch moderator panel",
  },
  {
    title: "FizzBuzz",
    to: "/project/fizz-buzz",
    description:
      'Numbers 1 to 100 where any number divisible by three is replaced with the word "fizz", and any number divisible by five is replaced with the word "buzz"',
  },
  {
    title: "Clock",
    to: "/project/clock",
    description: "A SVG clock example cloned from svelte.dev",
  },
  {
    title: "Divisibles",
    to: "/project/divisibles",
    description: "Hover over numbers to show their divisors",
  },
  {
    title: "MathML",
    to: "/project/mathml",
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
    to: "/project/pie-chart",
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
    to: "/project/simple-form",
    description: "A simple form example using react-hook-form",
  },
  {
    title: "Thorpe Bay Yacht Club",
    to: "https://tbyc-astro-wordpress.netlify.app/",
    description:
      "An astro site that integrates with a wordpress backend used by a local yacht club",
  },
  {
    title: "Vercel Badge",
    to: "/project/vercel-badge",
    description:
      "This is a @react-three/fiber example ported from a vercel blog post. This is more a reminder to myself about how to type some of the extra JSX tags when working with @react-three-fiber. For some reason, react-spring and react-three-fiber are almost impossible to type",
  },
];

const Projects: FunctionComponent<Props> = async (props) => {
  return (
    <Section {...props}>
      <h2 className="text-5xl">Projects</h2>

      <div className="space-y-4">
        <div>
          PLEASE NOTE that following feedback from a recent potential employer,
          this section is now under heavy development and will change
          frequently.
        </div>

        {projects.map(({ title, to, description }) => (
          <div key={`project-${title}`}>
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
                <h3 className="truncate text-lg font-semibold leading-tight">
                  {title}
                </h3>
              </Anchor>
              <div className="mt-3">
                <p className="text-sm text-gray-900">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
