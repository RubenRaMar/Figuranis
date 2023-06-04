import { renderHook } from "@testing-library/react";
import useFigures from "./useFigure";
import { wrapWithProviders } from "../../utils/testUtils";
import { figuresMock } from "../../mocks/figures/figures";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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
    test("Then it should throw a 'No figures have been found to list'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("No figures have been found to list");

      const {
        result: {
          current: { getFiguresList: getFiguresList },
        },
      } = renderHook(() => useFigures(), { wrapper: wrapWithProviders });

      const response = getFiguresList();

      expect(response).rejects.toThrowError(expectedError);
    });
  });
});
