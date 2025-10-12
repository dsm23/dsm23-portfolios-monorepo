import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Solid from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Solid", () => {
      it("should render", () => {
        const { container } = render(<Solid />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
