import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/lib/store";

export const filters = {
  SHOW_ALL: "show_all",
  SHOW_COMPLETED: "show_completed",
  SHOW_ACTIVE: "show_active",
} as const;

export type VisibilityFilter = (typeof filters)[keyof typeof filters];

export type VisibilityFilterState = {
  value: VisibilityFilter;
};

const initialState: VisibilityFilterState = {
  value: "show_all",
};

const visibilityFilterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFilter>) {
      state.value = action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export const getVisibilityFilter = (state: RootState) =>
  state.visibilityFilter.value;

export default visibilityFilterSlice.reducer;
