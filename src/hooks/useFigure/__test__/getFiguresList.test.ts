import { renderHook } from "@testing-library/react";
import { figuresMock } from "../../../mocks/figures/figures";
import { errorHandlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { store } from "../../../store";
import { wrapWithProviders } from "../../../utils/testUtils";
import useFigures from "../useFigure";

describe("Given a getFiguresList custom hook", () => {
  describe("When it invoked", () => {
    test("Then it should return a figure list", async () => {
      const {
        result: {
          current: { getFiguresList },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figures = await getFiguresList(1, 2);

      expect(figures?.figuresData).toStrictEqual(figuresMock);
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
