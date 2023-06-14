import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it rendered", () => {
    test("Then it should show a 'Loading...' text", () => {
      const expectedText = "Loading...";

      renderWithProviders(<Loading />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a 'Goku playing with the dragon balls' image", () => {
      const expectedAltText = /Goku playing with the dragon balls/i;

      renderWithProviders(<Loading />);

      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
