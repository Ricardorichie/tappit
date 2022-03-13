import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testUtils";
import ErrorPage from "./index";

describe("Test for the Error Page View", () => {
  test("Appropriate view for the Component", () => {
    renderWithRouter(<ErrorPage />);
    expect(
      screen.getByText(/Sorry, the page you visited does not exist./i)
    ).toBeInTheDocument();
  });
});
