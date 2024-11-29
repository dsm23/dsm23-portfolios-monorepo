import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import ChevronLeft from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("ChevronLeft", () => {
      it("should render", () => {
        const { container } = render(<ChevronLeft />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
