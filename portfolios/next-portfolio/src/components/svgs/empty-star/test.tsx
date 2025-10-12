import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EmptyStar from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("EmptyStar", () => {
      it("should render", () => {
        const { container } = render(<EmptyStar />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
