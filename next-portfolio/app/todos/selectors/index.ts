import { createSelector } from "reselect";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../constants/TodoFilters";

import { getTodos } from "~/lib/features/todos/slice";
import { getVisibilityFilter } from "~/lib/features/visibility-filter/slice";

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  },
);

export const getCompletedTodoCount = createSelector([getTodos], (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0),
);
