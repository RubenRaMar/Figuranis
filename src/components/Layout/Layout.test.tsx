import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Layout from "./Layout";
import { initialUiState } from "../../store/ui/uiSlice";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";

describe("Given a Layout component", () => {
  describe("When it rendering", () => {
    test("Then it should show a logo image", () => {
      const expectedAlternativeText = "Figuranis logotype";

      renderWithProviders(<Layout />);

      const logo = screen.getByRole("img", { name: expectedAlternativeText });

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it rendered but expect a response", () => {
    test("Then it should show a 'Goku playing the dragon balls' image", () => {
      const expectedAltText = "Goku playing the dragon balls";

      renderWithProviders(<Layout />, {
        ui: {
          ...initialUiState,
          isLoading: true,
          modal: {
            isModal: true,
            error: true,
            message: modalsMessage.wrongCredentials,
          },
        },
      });

      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
