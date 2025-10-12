import type { PropsWithChildren, ReactElement } from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { afterEach } from "vitest";
import type {
  Queries,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { setupStore } from "~/lib/store";
import type { AppStore, RootState } from "~/lib/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

afterEach(() => {
  cleanup();
});

function customRender(
  ui: ReactElement,
  options = {},
): ReturnType<typeof render> {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

function renderWithProviders<Q extends Queries>(
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
): RenderResult<Q> & {
  store: AppStore;
} {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render<Q>(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export { customRender as render, renderWithProviders };
