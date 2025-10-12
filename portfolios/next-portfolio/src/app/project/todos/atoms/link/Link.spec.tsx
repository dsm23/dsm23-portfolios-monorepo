import type { ReactNode } from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { setVisibilityFilter } from "~/lib/features/visibility-filter/slice";
import { renderWithProviders } from "~/test-utils";
import type { VisibilityFilter } from "~/lib/features/visibility-filter/slice";
import Link from ".";
import styles from "./styles.module.css";

vi.mock("~/lib/store/hooks", async () => {
  return {
    __esModule: true,
    ...(await vi.importActual("~/lib/store/hooks")),
    useAppDispatch: vi.fn(() => vi.fn()),
  };
});

vi.mock("~/lib/features/visibility-filter/slice", async () => {
  return {
    __esModule: true,
    ...(await vi.importActual("~/lib/features/visibility-filter/slice")),
    setVisibilityFilter: vi.fn(),
  };
});

type Props = {
  children: ReactNode;
  filter: VisibilityFilter;
};

const defaultProps: Props = {
  children: "All",
  filter: "show_all",
};

const setup = (props?: Props) => {
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
