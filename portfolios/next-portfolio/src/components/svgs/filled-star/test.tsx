import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FilledStar from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("FilledStar", () => {
      it("should render", () => {
        const { container } = render(<FilledStar />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
