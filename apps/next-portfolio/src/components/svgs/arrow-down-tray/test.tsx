import { render } from "@testing-library/react";
import ArrowDownTray from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("ArrowDownTray", () => {
      it("should render", () => {
        const { container } = render(<ArrowDownTray />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
