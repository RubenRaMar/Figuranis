import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "../../types";

export const initialUiState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: () => ({
      isLoading: true,
    }),

    hideLoading: () => ({
      isLoading: false,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
