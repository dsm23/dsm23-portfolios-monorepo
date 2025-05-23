import { describe, expect, it, jest } from "@jest/globals";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "~/test-utils";
import Footer from ".";

const defaultProps = {
  completedCount: 0,
  activeCount: 0,
  onClearCompleted: jest.fn(),
};

const setup = (props?: Partial<typeof defaultProps>) => {
  // const renderer = createRenderer();
  return renderWithProviders(<Footer {...defaultProps} {...props} />);
};

describe("components", () => {
  describe("Footer", () => {
    it("should render container", () => {
      const { container } = setup();

      expect(container.querySelector("footer")).toBeInTheDocument();
    });

    it("should display active count when 0", () => {
      setup({ activeCount: 0 });

      expect(
        screen.getByText(
          (_, element) => element?.textContent === "No items left!",
        ),
      ).toBeInTheDocument();
    });

    it("should display active count when above 0", () => {
      setup({ activeCount: 1 });

      expect(
        screen.getByText(
          (_, element) => element?.textContent === "1 item left!",
        ),
      ).toBeInTheDocument();
    });

    it("should render filters", () => {
      const filterTitles = ["All", "Active", "Completed"];

      setup();

      for (const title of filterTitles) {
        expect(screen.getByText(title)).toBeInTheDocument();
      }
    });

    it("shouldnt show clear button when no completed todos", () => {
      setup({ completedCount: 0 });

      expect(screen.queryByText("Clear completed")).not.toBeInTheDocument();
    });

    it("should render clear button when completed todos", () => {
      setup({ completedCount: 1 });

      expect(screen.queryByText("Clear completed")).toBeInTheDocument();
    });

    it("should call onClearCompleted on clear button click", () => {
      const mockFn = jest.fn();

      setup({ completedCount: 1, onClearCompleted: mockFn });

      const button = screen.getByText("Clear completed");

      expect(button).toBeInTheDocument();

      button.click();

      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
