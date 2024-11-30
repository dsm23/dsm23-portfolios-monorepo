import { describe, expect, it } from "@jest/globals";
import { screen } from "@testing-library/react";
import { clearCompleted } from "~/lib/features/todos/slice";
import { RootState } from "~/lib/store";
import { renderWithProviders } from "~/test-utils";
import MainSection from ".";

jest.mock("~/lib/store/hooks", () => {
  return {
    __esModule: true,
    ...jest.requireActual("~/lib/store/hooks"),
    useAppDispatch: jest.fn(() => jest.fn()),
  };
});

jest.mock("~/lib/features/todos/slice", () => {
  return {
    __esModule: true,
    ...jest.requireActual("~/lib/features/todos/slice"),
    clearCompleted: jest.fn(),
    completeAllTodos: jest.fn(),
    completeTodo: jest.fn(),
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
