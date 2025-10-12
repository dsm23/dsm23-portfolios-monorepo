import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { addTodo } from "~/lib/features/todos/slice";
import { renderWithProviders } from "~/test-utils";
import Header from ".";

vi.mock("~/lib/store/hooks", async () => {
  return {
    ...(await vi.importActual("~/lib/store/hooks")),
    useAppDispatch: vi.fn(() => vi.fn()),
  };
});

vi.mock("~/lib/features/todos/slice", async () => {
  return {
    ...(await vi.importActual("~/lib/features/todos/slice")),
    addTodo: vi.fn(),
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
