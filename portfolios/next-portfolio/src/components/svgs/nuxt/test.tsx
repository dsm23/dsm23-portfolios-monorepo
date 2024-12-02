import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Nuxt from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Nuxt", () => {
      it("should render", () => {
        const { container } = render(<Nuxt />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
