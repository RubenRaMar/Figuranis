import { renderWithProviders } from "../../utils/testUtils";
import DetailsFigurePage from "./DetailsFigurePage";
import { screen } from "@testing-library/react";

describe("Given a DetailsFigurePage component", () => {
  describe("When it is rendered", () => {
    test("athen it should show a heading with a 'Figure details' text", () => {
      const expectedHeadingText = "Figure details";

      renderWithProviders(<DetailsFigurePage />, {
        figure: {
          figuresData: [
            {
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
          ],
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
          figuresData: [
            {
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
          ],
        },
      });

      expectedTexts.forEach((expectedText) => {
        const text = screen.getByText(expectedText);

        expect(text).toBeInTheDocument();
      });
    });
  });
});
