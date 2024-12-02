import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Next from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Next", () => {
      it("should render", () => {
        const { container } = render(<Next />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
