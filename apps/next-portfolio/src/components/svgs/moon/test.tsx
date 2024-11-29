import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Moon from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Moon", () => {
      it("should render", () => {
        const { container } = render(<Moon />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
