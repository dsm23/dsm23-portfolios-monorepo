import { describe, expect, it } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from ".";
import { addTodo } from "~/lib/features/todos/slice";
import { renderWithProviders } from "~/test-utils";

jest.mock("~/lib/store/hooks", () => {
  return {
    ...jest.requireActual("~/lib/store/hooks"),
    useAppDispatch: jest.fn(() => jest.fn()),
  };
});

jest.mock("~/lib/features/todos/slice", () => {
  return {
    ...jest.requireActual("~/lib/features/todos/slice"),
    addTodo: jest.fn(),
  };
});

const setup = () => ({
  user: userEvent.setup(),
  ...renderWithProviders(<Header />),
});

describe("components", () => {
  describe("Header", () => {
    it("should render correctly", () => {
      setup();

      expect(
        screen.getByPlaceholderText<HTMLInputElement>("What needs to be done?"),
      ).toBeInTheDocument();
    });

    it("should call addTodo if length of text is greater than 0", async () => {
      const { user } = setup();

      expect(addTodo).not.toHaveBeenCalled();

      const input = screen.getByPlaceholderText<HTMLInputElement>(
        "What needs to be done?",
      );

      await user.type(input, "Hello, World![Enter]");

      input.focus();
      fireEvent.keyDown(document.activeElement || document.body, {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        charCode: 13,
      });

      expect(addTodo).toHaveBeenCalledTimes(1);
    });
  });
});
