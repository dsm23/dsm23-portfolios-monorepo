import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
