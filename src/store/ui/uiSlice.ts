import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiModalStructure, UiStructure } from "../../types";

export const initialUiState: UiStructure = {
  isLoading: false,
  modal: {
    isModal: false,
    error: false,
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: () => ({
      ...initialUiState,
      isLoading: true,
    }),

    hideLoading: () => ({
      ...initialUiState,
      isLoading: false,
    }),

    showModal: (currentUiState, action: PayloadAction<UiModalStructure>) => ({
      ...currentUiState,
      modal: action.payload,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const { hideLoading: hideLoadingActionCreator } = uiSlice.actions;
export const { showModal: showModalActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
