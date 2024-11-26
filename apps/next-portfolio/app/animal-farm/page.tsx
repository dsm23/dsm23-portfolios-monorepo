import Anchor from "~/components/anchor";
import Animals from "./animals";
import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";

const Page = () => (
  <Main className="w-full px-6 py-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/animal-farm/page.tsx" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">
      Animal Farm
    </h1>
    <p>
      The animal farm example from{" "}
      <Anchor
        href="https://fireship.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        fireship pro
      </Anchor>{" "}
      reconfigured for Next.js and with TypeScript
    </p>

    <Animals />
  </Main>
);

export default Page;
