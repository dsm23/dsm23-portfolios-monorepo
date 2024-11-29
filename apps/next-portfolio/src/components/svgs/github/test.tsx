import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import GitHub from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("GitHub", () => {
      it("should render", () => {
        const { container } = render(<GitHub />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
