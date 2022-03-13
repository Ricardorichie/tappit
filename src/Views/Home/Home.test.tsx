import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testUtils";
import HomePage from "./index";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
describe("Test for the Error Page View", () => {
  test("Appropriate view for the Component", () => {
    renderWithRouter(<HomePage />);
    expect(
      screen.getByText(/My Amazing Favourite American Sports App/i)
    ).toBeInTheDocument();
  });
  test("View test for the table component", () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByTestId("tableId")).toBeInTheDocument();
  });
});
