import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import CodeSandbox from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("CodeSandbox", () => {
      it("should render", () => {
        const { container } = render(<CodeSandbox />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
