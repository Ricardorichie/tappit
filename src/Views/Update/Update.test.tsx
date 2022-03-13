/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/testUtils";
import UpdatePage from "./index";
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
describe("Test for the UpdatePage View", () => {
  renderWithRouter(<UpdatePage />);
  test("Appropriate view for the component", () => {
    expect(screen.getByText(/Update Personal Details/)).toBeInTheDocument();
  });
  test("Appropriate number of button components in view", () => {
    const { queryAllByTestId } = renderWithRouter(<UpdatePage />);

    expect(queryAllByTestId("toggle")).toHaveLength(2);
  });
  test("Appropriate number of switch components in view", () => {
    const { queryAllByRole } = renderWithRouter(<UpdatePage />);

    expect(queryAllByRole("switch")).toHaveLength(3);
  });
  test("Appropriate number of input components in view", () => {
    const { queryAllByTitle } = renderWithRouter(<UpdatePage />);

    expect(queryAllByTitle("input")).toHaveLength(2);
  });
  test("Appropriate label component display in view", () => {
    renderWithRouter(<UpdatePage />);
    expect(screen.getByText(/First Name/)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/)).toBeInTheDocument();
    expect(screen.getByText(/Enabled/)).toBeInTheDocument();
    expect(screen.getByText(/Valid/)).toBeInTheDocument();
    expect(screen.getByText(/Authorised/)).toBeInTheDocument();
    expect(screen.getByText(/Favourite Sports/)).toBeInTheDocument();
  });
});
