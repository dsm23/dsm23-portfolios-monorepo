import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { clearCompleted } from "~/lib/features/todos/slice";
import { renderWithProviders } from "~/test-utils";
import type { RootState } from "~/lib/store";
import MainSection from ".";

vi.mock("~/lib/store/hooks", async () => {
  return {
    __esModule: true,
    ...(await vi.importActual("~/lib/store/hooks")),
    useAppDispatch: vi.fn(() => vi.fn()),
  };
});

vi.mock("~/lib/features/todos/slice", async () => {
  return {
    __esModule: true,
    ...(await vi.importActual("~/lib/features/todos/slice")),
    clearCompleted: vi.fn(),
    completeAllTodos: vi.fn(),
    completeTodo: vi.fn(),
  };
});

const setup = (preloadedState?: Partial<RootState>) => {
  return renderWithProviders(<MainSection />, { preloadedState });
};

describe("components", () => {
  describe("MainSection", () => {
    it("should render container", () => {
      const { container } = setup();

      expect(container.querySelector("section")).toBeInTheDocument();
    });

    // describe("toggle all input", () => {
    //   it("should render", () => {
    //     setup();
    //     const [toggle] = output.props.children[0].props.children;
    //     expect(toggle.type).toBe("input");
    //     expect(toggle.props.className).toBe("toggle-all");
    //     expect(toggle.props.type).toBe("checkbox");
    //     expect(toggle.props.checked).toBe(false);
    //   });

    // it("should be checked if all todos completed", () => {
    //   setup({
    //     completedCount: 2,
    //   });
    //   const [toggle] = output.props.children[0].props.children;
    //   expect(toggle.props.checked).toBe(true);
    // });

    //   it("should call completeAllTodos on change", () => {
    //     setup();
    //     const [, label] = output.props.children[0].props.children;
    //     label.props.onClick({});
    //     expect(props.actions.completeAllTodos).toBeCalled();
    //   });
    // });

    describe("footer", () => {
      it("should render", () => {
        const { container } = setup();

        expect(container.querySelector("footer")).toBeInTheDocument();
        expect(screen.getByText("item left!")).toBeInTheDocument();
        expect(screen.queryByText("items left!")).not.toBeInTheDocument();
      });

      it("onClearCompleted should call clearCompleted", async () => {
        setup({
          todos: {
            value: [
              {
                id: 0,
                completed: true,
                text: "Use Redux",
              },
            ],
          },
        });

        screen.getByText("Clear completed", { selector: "button" }).click();

        expect(clearCompleted).toHaveBeenCalledTimes(1);
      });
    });

    describe("visible todo list", () => {
      it("should render", () => {
        const { container } = setup();

        expect(container.querySelector("li")).toBeInTheDocument();
      });
    });

    describe("toggle all input and footer", () => {
      it("should not render if there are no todos", () => {
        setup();
        //   {
        //   todosCount: 0,
        //   completedCount: 0,
        // }

        // expect(renderedChildren.length).toBe(1);
        // expect(renderedChildren[0].type).toBe(jestsibleTodoList);
        expect(
          screen.queryByText("Clear completed", { selector: "button" }),
        ).not.toBeInTheDocument();
      });
    });
  });
});
