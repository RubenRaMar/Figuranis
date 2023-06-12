import { renderHook } from "@testing-library/react";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { wrapWithProviders } from "../../../utils/testUtils";
import useFigures from "../useFigure";
import { figuresMock } from "../../../mocks/figures/figures";
import { store } from "../../../store";

describe("Given a getFigureById custom hook", () => {
  describe("When it invoked with a valid figure id", () => {
    test("Then it should return a figure", async () => {
      server.resetHandlers(...handlers);

      const id = "709870";

      const {
        result: {
          current: { getFigureById },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figure = await getFigureById(id);

      expect(figure).toStrictEqual([figuresMock[0]]);
    });
  });

  describe("When it invoked with a non-existent figure id", () => {
    test("Then it should cancel the loading'", async () => {
      server.resetHandlers(...errorHandlers);

      const id = "41f324f234f";

      const {
        result: {
          current: { getFigureById },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      await getFigureById(id);

      const isLoading = store.getState().ui.isLoading;

      expect(isLoading).toBeFalsy();
    });
  });
});
