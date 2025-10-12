import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChevronRight from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("ChevronRight", () => {
      it("should render", () => {
        const { container } = render(<ChevronRight />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
