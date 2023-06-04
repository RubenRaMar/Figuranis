import { initialUiState, showLoadingActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoading mini reducer", () => {
  describe("When it invoked", () => {
    test("Then it should change the isLoading state to true", () => {
      const isLoading = uiReducer(initialUiState, showLoadingActionCreator());

      expect(isLoading).toStrictEqual({ isLoading: true });
    });
  });
});
