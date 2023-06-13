import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";
import { renderWithProvidersRouterTest } from "../utils/testUtils";
import { userTokenMock } from "../mocks/user/userMocks";

localStorage.setItem("FIguRaniSTokeN", userTokenMock);

describe("Given a appRouter", () => {
  describe("When rendered and a token exists in local storage", () => {
    test("Then it should show the 'All', 'Add figures icon' and 'Pending figures icon' links", async () => {
      const linksLabelsTexts = [
        "All figures icon",
        "Pending figures icon",
        "Add figures icon",
      ];

      renderWithProvidersRouterTest(<RouterProvider router={appRouter} />);

      linksLabelsTexts.forEach(async (linkLabelText) => {
        const link = screen.getByLabelText(linkLabelText);

        expect(link).toBeInTheDocument();
      });
    });
  });
});
