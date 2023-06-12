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
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),

    showModal: (currentUiState, action: PayloadAction<UiModalStructure>) => ({
      ...currentUiState,
      modal: action.payload,
    }),

    hideModal: (currentUiState) => ({
      ...currentUiState,
      modal: {
        isModal: false,
        error: false,
        message: "",
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
