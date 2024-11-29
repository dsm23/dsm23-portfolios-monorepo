import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Sun from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Sun", () => {
      it("should render", () => {
        const { container } = render(<Sun />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
