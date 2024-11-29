import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
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
