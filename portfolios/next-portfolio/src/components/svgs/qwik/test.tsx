import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Qwik from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("Qwik", () => {
      it("should render", () => {
        const { container } = render(<Qwik />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
