import type { FunctionComponent, HTMLAttributes } from "react";
import Anchor from "~/components/anchor";
import { HoverLink } from "~/components/card-hover-effect";
import Section from "~/components/section";

type Props = HTMLAttributes<HTMLElement>;

const Interests: FunctionComponent<Props> = (props) => (
  <Section {...props}>
    <h2 className="text-5xl">Templates</h2>
    <p className="mt-4">
      <Anchor
        href="https://vercel.com/templates"
        rel="noopener noreferrer"
        target="_blank"
      >
        Vercel
      </Anchor>{" "}
      has a number of frontend templates for getting started. A number have very
      minimal configuration. One (
      <Anchor
        href="https://github.com/Blazity/next-enterprise"
        rel="noopener noreferrer"
        target="_blank"
      >
        Blazity
      </Anchor>
      ) has a lot of configuration including GitHub actions setup. The others
      are a lot less opinionated. The idea was to take the Vercel templates and
      add the configuration that I want to use in project going forward. Along
      with some configuration from{" "}
      <Anchor
        href="https://github.com/nodejs/nodejs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        nodejs.org
      </Anchor>
      .
    </p>

    <div className="grid list-inside list-disc grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
      <HoverLink href="https://github.com/dsm23/dsm23-next-template">
        Next Template
      </HoverLink>

      <HoverLink href="https://github.com/dsm23/dsm23-vite-spa-template">
        Vite Template
      </HoverLink>

      <HoverLink href="https://github.com/dsm23/dsm23-next-supabase-template">
        Next Supabase Template
      </HoverLink>

      <HoverLink href="https://github.com/dsm23/dsm23-next-supabase-template">
        Next Markdown Template
      </HoverLink>

      <HoverLink href="https://github.com/dsm23/dsm23-next-payloadcms-template">
        Next Payload Template
      </HoverLink>

      <HoverLink href="https://github.com/dsm23/dsm23-deno-vite-spa-template">
        Deno Vite Template
      </HoverLink>

      <HoverLink href="https://github.com/dsm23/dsm23-bun-next-template">
        Bun Next Template
      </HoverLink>
    </div>
  </Section>
);

export default Interests;
