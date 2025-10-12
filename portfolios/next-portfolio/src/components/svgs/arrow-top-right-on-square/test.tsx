import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ArrowTopRightOnSquare from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("ArrowTopRightOnSquare", () => {
      it("should render", () => {
        const { container } = render(<ArrowTopRightOnSquare />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
