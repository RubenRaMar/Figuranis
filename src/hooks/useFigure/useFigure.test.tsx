import { renderHook } from "@testing-library/react";
import useFigures from "./useFigure";
import { wrapWithProviders } from "../../utils/testUtils";
import { figuresMock } from "../../mocks/figures/figures";

describe("Given a getFigureList custom hook", () => {
  describe("When it invoked", () => {
    test("Then it should return a figure list", async () => {
      const {
        result: {
          current: { getFigureList },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const figures = await getFigureList();

      expect(figures).toStrictEqual(figuresMock);
    });
  });
});
