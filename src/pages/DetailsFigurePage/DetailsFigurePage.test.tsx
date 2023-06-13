import { renderWithProviders } from "../../utils/testUtils";
import DetailsFigurePage from "./DetailsFigurePage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import pathList from "../../utils/pathList/pathList";

describe("Given a DetailsFigurePage component", () => {
  describe("When it is rendered", () => {
    test("athen it should show a heading with a 'Figure details' text", () => {
      const expectedHeadingText = "Figure details";

      renderWithProviders(<DetailsFigurePage />, {
        figure: {
          figuresData: [],
          figureData: {
            user: "",
            title: "title",
            character: "character",
            franchise: "franchise",
            purchased: false,
            manufacturer: "manufacturer",
            material: "material",
            size: 0,
            weight: 0,
            price: 0,
            image: "",
            id: "",
          },
        },
      });

      const heading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the following texts 'title', 'character', 'franchise', 'purchased', 'manufacturer', 'material', 'size', 'weight', 'price', 'image'", () => {
      const expectedTexts = [
        "character",
        "franchise",
        "title",
        "manufacturer",
        "material",
        "Purchased",
        "Size",
        "Weight",
      ];

      renderWithProviders(<DetailsFigurePage />, {
        figure: {
          figureData: {
            user: "",
            title: "title",
            character: "character",
            franchise: "franchise",
            purchased: true,
            manufacturer: "manufacturer",
            material: "material",
            size: 0,
            weight: 0,
            price: 0,
            image: "",
            id: "",
          },
          figuresData: [],
        },
      });

      expectedTexts.forEach((expectedText) => {
        const text = screen.getByText(expectedText);

        expect(text).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered and the user clicks on the 'delete' or 'modify' button", () => {
    test("Then it should call the function 'handleDeleteFigure'", async () => {
      const expectedButtonText = /delete/i;

      renderWithProviders(<DetailsFigurePage />, {
        figure: {
          figureData: {
            user: "",
            title: "title",
            character: "character",
            franchise: "franchise",
            purchased: true,
            manufacturer: "manufacturer",
            material: "material",
            size: 0,
            weight: 0,
            price: 0,
            image: "",
            id: "",
          },
          figuresData: [],
        },
      });

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(location.pathname).toBe(pathList.figures);
    });

    test("Then it should call the function 'handleUpdateFigurePage'", async () => {
      const expectedButtonText = /modify/i;

      renderWithProviders(<DetailsFigurePage />, {
        figure: {
          figureData: {
            user: "",
            title: "title",
            character: "character",
            franchise: "franchise",
            purchased: true,
            manufacturer: "manufacturer",
            material: "material",
            size: 0,
            weight: 0,
            price: 0,
            image: "",
            id: "123",
          },
          figuresData: [],
        },
      });

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(location.pathname).toBe(
        `${pathList.figures}${pathList.update}/undefined`
      );
    });
  });
});
