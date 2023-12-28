import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiModalStructure, UiStructure } from "./types";

export const initialUiState: UiStructure = {
  isLoading: false,
  modal: {
    isModal: false,
    isError: false,
    message: "",
    image: {
      src: "",
      alt: "",
    },
  },
  pagination: {
    page: 0,
    totalFiguresToShow: 12,
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
      modal: initialUiState.modal,
    }),

    pagination: (currentUiState, action: PayloadAction<number>) => ({
      ...currentUiState,
      pagination: {
        ...currentUiState.pagination,
        page: action.payload,
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  pagination: paginationActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
