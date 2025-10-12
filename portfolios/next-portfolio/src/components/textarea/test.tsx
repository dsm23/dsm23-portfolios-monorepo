import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Textarea from ".";

describe("components", () => {
  describe("Textarea", () => {
    it("should render", () => {
      const { container } = render(<Textarea />);

      expect(container.querySelector("textarea")).toBeInTheDocument();
    });
  });
});
