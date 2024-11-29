import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Gatsby from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Gatsby", () => {
      it("should render", () => {
        const { container } = render(<Gatsby />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
