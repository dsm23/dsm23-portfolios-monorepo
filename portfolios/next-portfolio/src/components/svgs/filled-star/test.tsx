import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
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
