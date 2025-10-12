import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
