import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
