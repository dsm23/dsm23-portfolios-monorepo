import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Laptop from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Laptop", () => {
      it("should render", () => {
        const { container } = render(<Laptop />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
