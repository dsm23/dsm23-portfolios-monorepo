import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
