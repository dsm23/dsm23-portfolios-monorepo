import { Anchor, Main, StyledGoBack } from "~/components";
import Game from "./game";

const NoughtsAndCrosses = () => (
  <Main className="w-full px-6 py-8">
    <StyledGoBack className="mb-4" href="/#projects" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">
      MathML Core example
    </h1>

    <p>
      The tutorial example from{" "}
      <Anchor href="https://reactjs.org/tutorial/tutorial.html">
        reactjs docs
      </Anchor>{" "}
      re-styled and with types
    </p>

    <Game />
  </Main>
);

export default NoughtsAndCrosses;
