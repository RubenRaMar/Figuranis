import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import { UiModalStructure } from "./types";
import {
  hideLoadingActionCreator,
  hideModalActionCreator,
  initialUiState,
  showLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

const modalErrorMock: UiModalStructure = {
  isModal: true,
  isError: true,
  message: modalsMessage.wrongCredentials,
  image: {
    src: "",
    alt: "",
  },
};

const isLoadingTrue = { ...initialUiState, isLoading: true };

describe("Given a showLoading mini reducer", () => {
  describe("When it is invoked", () => {
    test("Then it should change the isLoading state to true", () => {
      const isLoading = uiReducer(initialUiState, showLoadingActionCreator());

      expect(isLoading).toStrictEqual(isLoadingTrue);
    });
  });
});

describe("Given a hideLoading mini reducer", () => {
  describe("When it is invoked", () => {
    test("Then it should change the isLoading property to false", () => {
      const isLoading = uiReducer(isLoadingTrue, hideLoadingActionCreator());

      expect(isLoading).toStrictEqual(initialUiState);
    });
  });
});

describe("Given a showModal mini reducer", () => {
  describe("When it is invoked to show an error message 'Wrong credentials'", () => {
    test("Then it should change the isModal and error poperty to true and the message to 'Wrong credentials'", () => {
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

describe("Given a hideModal mini reducer", () => {
  describe("When it is invoked", () => {
    test("Then it should resetting the states of the modals", () => {
      const resetModalsState = uiReducer(
        { ...initialUiState, modal: modalErrorMock },
        hideModalActionCreator()
      );

      expect(resetModalsState).toStrictEqual(initialUiState);
    });
  });
});
