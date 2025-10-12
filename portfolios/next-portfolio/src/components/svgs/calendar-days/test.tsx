import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CalendarDays from ".";

describe("components", () => {
  describe("svgs", () => {
    describe("CalendarDays", () => {
      it("should render", () => {
        const { container } = render(<CalendarDays />);

        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
