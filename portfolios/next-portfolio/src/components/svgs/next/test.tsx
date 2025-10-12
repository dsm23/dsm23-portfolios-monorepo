import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
