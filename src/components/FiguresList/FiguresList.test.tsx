import { act, screen } from "@testing-library/react";
import { vi } from "vitest";
import {
  figureMockFactory,
  figuresMocksFactory,
} from "../../mocks/factory/factories";
import { renderWithProviders } from "../../utils/testUtils";
import FiguresList from "./FiguresList";

describe("Given a FiguresList component", () => {
  const figureMock = figureMockFactory();
  const figuresMockList = figuresMocksFactory(2);

  describe("When it rendered", () => {
    test("Then it should show a card title with a heading ", () => {
      renderWithProviders(<FiguresList />, {
        figure: { figureData: figureMock, figuresData: figuresMockList },
      });

      const heading = screen.getByRole("heading", {
        name: figuresMockList[0].franchise,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it rendered without any figure to show ", () => {
    vi.useFakeTimers();

    afterEach(() => {
      vi.clearAllTimers();
    });

    test("Then it should show a 'No figures have been found to list' text ", () => {
      const expectedText = "No figures have been found to list";
      const figuresMockList: [] = [];

      renderWithProviders(<FiguresList />, {
        figure: { figureData: figureMock, figuresData: figuresMockList },
      });

      act(() => {
        vi.runOnlyPendingTimers();
      });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a image of the 'Son Goku searching with the dragon radar'", () => {
      const expectedAtlText = "Son Goku searching with the dragon radar";
      const figuresMockList: [] = [];

      renderWithProviders(<FiguresList />, {
        figure: { figureData: figureMock, figuresData: figuresMockList },
      });

      act(() => {
        vi.runOnlyPendingTimers();
      });

      const img = screen.getByRole("img", {
        name: expectedAtlText,
      });

      expect(img).toBeInTheDocument();
    });
  });
});
