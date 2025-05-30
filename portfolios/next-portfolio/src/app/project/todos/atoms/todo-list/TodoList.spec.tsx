import { describe, expect, it } from "@jest/globals";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "~/test-utils";
import type { RootState } from "~/lib/store";
import TodoList from ".";

const setup = (preloadedState?: Partial<RootState>) =>
  renderWithProviders(<TodoList />, { preloadedState });

describe("components", () => {
  describe("TodoList", () => {
    it("should render container", () => {
      const { container } = setup();

      expect(container.querySelector("ul")).toBeInTheDocument();
    });

    it("should render todos", () => {
      const { container } = setup();

      expect(container.querySelectorAll("li")).toHaveLength(1);
    });

    // TODO: make a test for preloadedState
    it("should render preloaded todos", () => {
      setup({
        todos: {
          value: [
            {
              text: "Run the tests",
              completed: false,
              id: 0,
            },
          ],
        },
      });

      expect(screen.getByText("Run the tests")).toBeInTheDocument();
      expect(screen.queryByText("Use Redux")).not.toBeInTheDocument();
    });
  });
});
