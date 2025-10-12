import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ThreeDots from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("ThreeDots", () => {
      it("should render", () => {
        const { container } = render(<ThreeDots />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
