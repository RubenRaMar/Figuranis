import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it rendered", () => {
    test("Then it should show a heading with 'LOGIN' text", () => {
      const expectedTest = "LOGIN";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", { name: expectedTest });

      expect(heading).toBeInTheDocument();
    });
  });
});
