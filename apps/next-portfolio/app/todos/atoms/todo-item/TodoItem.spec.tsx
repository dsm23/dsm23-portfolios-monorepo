import { fireEvent, screen } from "@testing-library/react";
import { deleteTodo } from "~/lib/features/todos/slice";
import TodoItem from ".";
import { renderWithProviders } from "~/test-utils";

import styles from "./styles.module.css";

jest.mock("~/lib/store/hooks", () => {
  return {
    ...jest.requireActual("~/lib/store/hooks"),
    useAppDispatch: jest.fn(() => jest.fn()),
  };
});

jest.mock("~/lib/features/todos/slice", () => {
  return {
    ...jest.requireActual("~/lib/features/todos/slice"),
    completeTodo: jest.fn(),
    deleteTodo: jest.fn(),
    editTodo: jest.fn(),
  };
});

const setup = (props?: any) => {
  const defaultProps = {
    todo: {
      id: 0,
      text: "Use Redux",
      completed: false,
    },
  };

  return renderWithProviders(<TodoItem {...defaultProps} {...props} />);
};

describe("components", () => {
  describe("TodoItem", () => {
    it("initial render", () => {
      const { container } = setup();

      expect(container.querySelector("li")).toBeInTheDocument();

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(checkbox).toBeInTheDocument();

      expect(checkbox).not.toBeChecked();

      expect(screen.getByText("Use Redux", { selector: "label" }));
      expect(container.querySelector("button")).toBeInTheDocument();
    });

    // it("input onChange should call completeTodo", () => {
    //   const { output, props } = setup();
    //   const input = output.props.children.props.children[0];
    //   input.props.onChange({});
    //   expect(props.completeTodo).toBeCalledWith(0);
    // });

    it("button onClick should call deleteTodo", () => {
      const { container } = setup();

      container.querySelector("button")?.click();

      expect(deleteTodo).toBeCalledTimes(1);
    });

    it("label onDoubleClick should put component in edit state", () => {
      const { container } = setup();

      const label = screen.getByText("Use Redux");

      fireEvent.doubleClick(label);

      expect(container.querySelector("li")).toHaveClass(styles.editing);
    });

    // it("edit state render", () => {
    //   const { output } = setup(true);

    //   expect(output.type).toBe("li");
    //   expect(output.props.className).toBe("editing");

    //   const input = output.props.children;
    //   expect(input.type).toBe(TodoTextInput);
    //   expect(input.props.text).toBe("Use Redux");
    //   expect(input.props.editing).toBe(true);
    // });

    // it("TodoTextInput onSave should call editTodo", () => {
    //   const { output, props } = setup(true);
    //   output.props.children.props.onSave("Use Redux");
    //   expect(props.editTodo).toBeCalledWith(0, "Use Redux");
    // });

    // it("TodoTextInput onSave should call deleteTodo if text is empty", () => {
    //   const { output, props } = setup(true);
    //   output.props.children.props.onSave("");
    //   expect(props.deleteTodo).toBeCalledWith(0);
    // });

    // it("TodoTextInput onSave should exit component from edit state", () => {
    //   const { output, renderer } = setup(true);
    //   output.props.children.props.onSave("Use Redux");
    //   const updated = renderer.getRenderOutput();
    //   expect(updated.type).toBe("li");
    //   expect(updated.props.className).toBe("");
    // });
  });
});
