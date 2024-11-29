import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
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
