import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import DragHandle from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("DragHandle", () => {
      it("should render", () => {
        const { container } = render(<DragHandle />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
