import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
