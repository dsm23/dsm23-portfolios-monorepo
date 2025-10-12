import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Label from ".";

describe("components", () => {
  describe("Label", () => {
    it("should render", () => {
      const { container } = render(<Label />);

      expect(container.querySelector("label")).toBeInTheDocument();
    });
  });
});
