import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Anchor from ".";

describe("components", () => {
  describe("Anchor", () => {
    it("should render", () => {
      const { container } = render(<Anchor href="#">Hello, World!</Anchor>);

      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  it("should render, polymorphic", () => {
    const { container } = render(<Anchor as="button">Hello, World!</Anchor>);

    expect(container.querySelector("button")).toBeInTheDocument();
    expect(container.querySelector("a")).not.toBeInTheDocument();
  });
});
