import type { FunctionComponent, HTMLAttributes } from "react";
import Anchor from "~/components/anchor";
import Section from "~/components/section";
import SectionHeader from "~/components/section-header";
import ArrowTopRightOnSquare from "~/components/svgs/arrow-top-right-on-square";
import CodeSandbox from "~/components/svgs/code-sandbox";
import Gatsby from "~/components/svgs/gatsby";
import GitHub from "~/components/svgs/github";
import Next from "~/components/svgs/next";
import Nuxt from "~/components/svgs/nuxt";
import Qwik from "~/components/svgs/qwik";
import Solid from "~/components/svgs/solid";
import type { Maybe, Person } from "@repo/generated";

interface Props extends HTMLAttributes<HTMLElement> {
  author?: Maybe<Person>;
}

const Home: FunctionComponent<Props> = ({ author, ...props }) => {
  const firstName = author?.firstName;
  const lastName = author?.lastName;
  const email = author?.email;
  const phone = author?.phone;
  const codesandbox = author?.codesandbox ?? "";
  const github = author?.github ?? "";
  const shortBio = author?.shortBio;
  const gatsbyPortfolio = author?.gatsbyPortfolio ?? "";
  const nextPortfolio = author?.nextPortfolio ?? "";
  const nuxtPortfolio = author?.nuxtPortfolio ?? "";
  const qwikCityPortfolio = author?.qwikCityPortfolio ?? "";
  const solidStartPortfolio = author?.solidStartPortfolio ?? "";

  return (
    <Section {...props}>
      <SectionHeader>
        <span className="text-gray-900 dark:text-white">{firstName}</span>{" "}
        <span className="text-sky-900 dark:text-sky-300">{lastName}</span>
      </SectionHeader>
      <address>
        London-based · {phone} ·{" "}
        <Anchor href="`mailto:${email}`">{email}</Anchor>
      </address>
      <p className="mt-4 text-gray-900 dark:text-white">{shortBio}</p>
      <div className="ml-6 mt-4 grid justify-start space-y-4">
        <a
          href={github}
          aria-label="GitHub"
          className="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub className="h-6 w-6" />
          GitHub/dsm23
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>
        <a
          href={codesandbox}
          aria-label="CodeSandbox"
          className="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <CodeSandbox className="h-6 w-6" />
          CodeSandbox/dsm23
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>

        <a
          href={gatsbyPortfolio}
          className="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Gatsby className="h-6 w-6" />
          React Gatsby portfolio
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>
        <a
          href={nextPortfolio}
          className="hidden transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900 print:flex"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Next className="h-6 w-6" />
          Next portfolio
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>
        <a
          href={nuxtPortfolio}
          className="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Nuxt className="h-6 w-6" />
          Nuxt portfolio
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>
        <a
          href={qwikCityPortfolio}
          className="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Qwik className="h-6 w-6" />
          Qwik City portfolio
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>
        <a
          href={solidStartPortfolio}
          className="flex transform items-center justify-between gap-x-4 rounded-full bg-gray-900 p-2 px-4 text-white transition duration-500 ease-in-out hover:scale-125 hover:bg-sky-900 focus-visible:scale-125 focus-visible:bg-sky-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Solid className="h-6 w-6" />
          Solid Start portfolio
          <ArrowTopRightOnSquare className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
};

export default Home;
