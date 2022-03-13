import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./utils/matchMedia.mock";
import App from "./App";
import { renderWithRouter } from "./utils/testUtils";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
describe("Test for the route component", () => {
  test("App navigation", () => {
    renderWithRouter(<App />, { route: "/" });
    expect(
      screen.getByText(/My Amazing Favourite American Sports App/i)
    ).toBeInTheDocument();
  });

  test("Landing on a bad page", () => {
    renderWithRouter(<App />, { route: "/wrong-route" });
    expect(
      screen.getByText(/Sorry, the page you visited does not exist./i)
    ).toBeInTheDocument();
  });
});
