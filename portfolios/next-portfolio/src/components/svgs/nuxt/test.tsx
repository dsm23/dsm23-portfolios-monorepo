import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
