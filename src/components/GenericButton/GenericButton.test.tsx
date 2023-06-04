import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import GenericButton from "./GenericButton";

describe("Given a GenericButton component", () => {
  const expectedTextButton = "Delete";
  const actionOnClick = vi.fn();

  describe("When it rendered and receives a 'Delete' text", () => {
    test("Then it should show a button with a 'Delete' text ", () => {
      renderWithProviders(
        <GenericButton
          actionOnClick={actionOnClick}
          text={expectedTextButton}
          className={""}
        />
      );

      const deleteButton = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(deleteButton).toBeInTheDocument();
    });
  });

  describe("When it rendered and receives the user click", () => {
    test("Then it should invoked the actonOnClick function", async () => {
      renderWithProviders(
        <GenericButton
          actionOnClick={actionOnClick}
          text={expectedTextButton}
          className={""}
        />
      );

      const deleteButton = screen.getByRole("button", {
        name: expectedTextButton,
      });

      await userEvent.click(deleteButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it rendered and receives a 'Modify' className", () => {
    test("Then it should have an arial label that describes the button as 'Modify'", () => {
      const expectedTextButton = "Modify";

      renderWithProviders(
        <GenericButton
          actionOnClick={actionOnClick}
          text={expectedTextButton}
          className={expectedTextButton}
        />
      );

      const deleteButton = screen.getByLabelText(expectedTextButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
