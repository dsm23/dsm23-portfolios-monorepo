import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Label from ".";

describe("components", () => {
  describe("Label", () => {
    it("should render", () => {
      const { container } = render(<Label />);

      expect(container.querySelector("label")).toBeInTheDocument();
    });
  });
});
