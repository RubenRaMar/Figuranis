import { renderHook } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import RouteProtector from "./RouteProtector";
import pathList from "../../utils/pathList/pathList";

describe("Given a RouteProtector component", () => {
  describe("When it rendered and the user is not logged in beforehand", () => {
    test("then it should redirect the user to the loguin page", () => {
      const expectedPath = `${pathList.user}${pathList.login}`;

      renderWithProviders(<RouteProtector />);

      expect(window.location.pathname).toBe(expectedPath);
    });
  });

  describe("When it rendered and the user is logged in", () => {
    test("then it should redirect the user to the FiguresPage page", async () => {
      const expectedPath = `${pathList.figures}`;

      const key = "FIguRaniSTokeN";
      const value =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      await renderWithProviders(<RouteProtector />);

      await expect(window.location.pathname).toBe(expectedPath);
    });
  });
});
