import { UiStructure } from "../../types";
import {
  hideLoadingActionCreator,
  initialUiState,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

const isLoadingTrue: UiStructure = { isLoading: true };

describe("Given a showLoading mini reducer", () => {
  describe("When it invoked", () => {
    test("Then it should change the isLoading state to true", () => {
      const isLoading = uiReducer(initialUiState, showLoadingActionCreator());

      expect(isLoading).toStrictEqual(isLoadingTrue);
    });
  });
});

describe("Given a hideLoading mini reducer", () => {
  describe("When it invoked", () => {
    test("then it should change the isLoading state to false", () => {
      const isLoading = uiReducer(isLoadingTrue, hideLoadingActionCreator());

      expect(isLoading).toStrictEqual(initialUiState);
    });
  });
});
