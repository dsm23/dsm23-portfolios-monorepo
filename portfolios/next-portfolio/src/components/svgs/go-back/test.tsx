import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GoBack from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("GoBack", () => {
      it("should render", () => {
        const { container } = render(<GoBack />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
