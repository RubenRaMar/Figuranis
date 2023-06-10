import { renderHook } from "@testing-library/react";
import useFigures from "./useFigure";
import { wrapWithProviders } from "../../utils/testUtils";
import { figuresMock } from "../../mocks/figures/figures";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { store } from "../../store";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import { figureMockFactory } from "../../mocks/factory/factories";

describe("Given a getFiguresList custom hook", () => {
  describe("When it invoked", () => {
    test("Then it should return a figure list", async () => {
      const {
        result: {
          current: { getFiguresList },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figures = await getFiguresList(1, 2);

      expect(figures?.figures).toStrictEqual(figuresMock);
    });
  });

  describe("When it receives an invalid token", () => {
    test("Then it should cancel the loading'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getFiguresList: getFiguresList },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await getFiguresList(1, 2);

      const isLoading = store.getState().ui.isLoading;

      expect(isLoading).toBeFalsy();
    });
  });
});

describe("Given a deleteFigure custom hook", () => {
  describe("When it invoked with a valid figure id", () => {
    test("Then it should show a modal with the text 'The figure has been successfully removed from the favorites list'", async () => {
      server.resetHandlers(...handlers);

      const id = "709870";

      const {
        result: {
          current: { deleteFigure },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await deleteFigure(id);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.removeCorrect);
    });
  });

  describe("When it invoked with a non-existent figure id", () => {
    test("Then it should show a modal with the text 'It has not been possible to remove the figure from the list'", async () => {
      server.resetHandlers(...errorHandlers);

      const id = "41f324f234f";

      const {
        result: {
          current: { deleteFigure },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await deleteFigure(id);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.removeError);
    });
  });
});

describe("Given a addFigureApi custom hook", () => {
  describe("When it invoked with a valid figure", () => {
    test("Then it shoud return a the figure created", async () => {
      server.resetHandlers(...handlers);
      const figure = figureMockFactory();

      const {
        result: {
          current: { addFigureApi },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figures = await addFigureApi(figure);

      expect(figures).toStrictEqual(figuresMock);
    });
  });

  describe("When it invoked with a invalid figure", () => {
    test("Then it should show a modal with the text 'Could not add new figure to your favorites list'", async () => {
      server.resetHandlers(...errorHandlers);
      const figure = figureMockFactory();

      const {
        result: {
          current: { addFigureApi },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await addFigureApi(figure);

      const message = store.getState().ui.modal.message;

      expect(message).toBe(modalsMessage.addError);
    });
  });
});
