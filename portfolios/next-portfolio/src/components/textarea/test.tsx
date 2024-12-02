import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Textarea from ".";

describe("components", () => {
  describe("Textarea", () => {
    it("should render", () => {
      const { container } = render(<Textarea />);

      expect(container.querySelector("textarea")).toBeInTheDocument();
    });
  });
});
