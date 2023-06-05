import {
  hideLoadingActionCreator,
  initialUiState,
  showLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

const isLoadingTrue = { ...initialUiState, isLoading: true };

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
    test("Then it should change the isLoading property to false", () => {
      const isLoading = uiReducer(isLoadingTrue, hideLoadingActionCreator());

      expect(isLoading).toStrictEqual(initialUiState);
    });
  });
});

describe("Given a showModal mini reducer", () => {
  describe("When it invoked to show an error message 'Wrong credentials'", () => {
    test("Then it should chenge the idModal and error poperty to true and the message to 'Wrong credentials'", () => {
      const modalErrorMock = {
        isModal: true,
        error: true,
        message: "'Wrong credential",
      };

      const modalError = uiReducer(
        initialUiState,
        showModalActionCreator(modalErrorMock)
      );

      expect(modalError).toStrictEqual({
        ...initialUiState,
        modal: modalErrorMock,
      });
    });
  });
});
