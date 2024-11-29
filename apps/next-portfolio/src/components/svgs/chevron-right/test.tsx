import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
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
