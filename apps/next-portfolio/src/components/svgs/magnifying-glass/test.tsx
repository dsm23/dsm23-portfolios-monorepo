import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import MagnifyingGlass from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("MagnifyingGlass", () => {
      it("should render", () => {
        const { container } = render(<MagnifyingGlass />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
