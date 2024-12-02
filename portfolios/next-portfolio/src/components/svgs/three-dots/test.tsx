import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import ThreeDots from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("ThreeDots", () => {
      it("should render", () => {
        const { container } = render(<ThreeDots />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
