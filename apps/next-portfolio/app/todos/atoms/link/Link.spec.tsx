import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setVisibilityFilter } from "~/lib/features/visibility-filter/slice";
import Link from ".";
import { renderWithProviders } from "~/test-utils";

import styles from "./styles.module.css";

jest.mock("~/lib/store/hooks", () => {
  return {
    __esModule: true,
    ...jest.requireActual("~/lib/store/hooks"),
    useAppDispatch: jest.fn(() => jest.fn()),
  };
});

jest.mock("~/lib/features/visibility-filter/slice", () => {
  return {
    __esModule: true,
    ...jest.requireActual("~/lib/features/visibility-filter/slice"),
    setVisibilityFilter: jest.fn(),
  };
});

const setup = (props?: any) => {
  const defaultProps = {
    children: "All",
    filter: "show_all",
  };

  return renderWithProviders(<Link {...defaultProps} {...props} />, {
    preloadedState: {
      visibilityFilter: {
        value: "show_all",
      },
    },
  });
};

describe("component", () => {
  describe("Link", () => {
    it("should render correctly", () => {
      setup();

      expect(screen.getByText("All", { selector: "a" })).toBeInTheDocument();
    });

    it("should have class selected if active", () => {
      setup();

      expect(screen.getByText("All", { selector: "a" })).toHaveClass(
        styles.selected,
      );
    });

    it("should call setFilter on click", async () => {
      setup();

      await userEvent.click(screen.getByText("All", { selector: "a" }));

      expect(setVisibilityFilter).toHaveBeenCalledTimes(1);
    });
  });
});
