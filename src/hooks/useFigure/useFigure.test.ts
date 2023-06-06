import { renderHook } from "@testing-library/react";
import useFigures from "./useFigure";
import { wrapWithProviders } from "../../utils/testUtils";
import { figuresMock } from "../../mocks/figures/figures";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";

describe("Given a getFiguresList custom hook", () => {
  describe("When it invoked", () => {
    test("Then it should return a figure list", async () => {
      const {
        result: {
          current: { getFiguresList },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figures = await getFiguresList();

      expect(figures).toStrictEqual(figuresMock);
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

      await getFiguresList();

      const isLoading = store.getState().ui.isLoading;

      expect(isLoading).toBeFalsy();
    });
  });
});
