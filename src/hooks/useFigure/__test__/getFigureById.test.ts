import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { wrapWithProviders } from "../../../utils/testUtils";
import useFigures from "../useFigure";
import { figuresMock } from "../../../mocks/figures/figures";

describe("Given a getFigureById custom hook", () => {
  describe("When it invoked with a valid figure id", () => {
    test("Then it should return a figure", async () => {
      const [expectedFigure] = figuresMock;
      const figuresList = [expectedFigure];
      const figureId = expectedFigure.id;

      const {
        result: {
          current: { getFigureById },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figure = await getFigureById(figureId);

      expect(figure).toStrictEqual(figuresList);
    });
  });

  describe("When it invoked with a non-existent figure id", () => {
    test("Then it should return undefined", async () => {
      server.use(...errorHandlers);

      const figureId = "41f324f234f";

      const {
        result: {
          current: { getFigureById },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figure = await getFigureById(figureId);

      expect(figure).toBeUndefined();
    });
  });
});
