import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Qwik from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Qwik", () => {
      it("should render", () => {
        const { container } = render(<Qwik />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
