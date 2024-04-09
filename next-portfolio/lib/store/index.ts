import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "~/lib/features/todos/slice";
import visibilityFilter from "~/lib/features/visibility-filter/slice";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
