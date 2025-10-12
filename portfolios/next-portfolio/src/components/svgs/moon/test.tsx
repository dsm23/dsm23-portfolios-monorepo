import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
