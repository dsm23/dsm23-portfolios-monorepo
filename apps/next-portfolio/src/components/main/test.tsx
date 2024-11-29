import { render } from "@testing-library/react";
import Main from ".";

describe("components", () => {
  describe("Main", () => {
    it("should render", () => {
      const { container } = render(<Main>Hello, World!</Main>);

      expect(container.querySelector("main")).toBeInTheDocument();
    });
  });

  it("should render, polymorphic", () => {
    const { container } = render(<Main as="div">Hello, World!</Main>);

    expect(container.querySelector("div")).toBeInTheDocument();
    expect(container.querySelector("main")).not.toBeInTheDocument();
  });
});
