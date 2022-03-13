import { render, screen, act } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { ButtonComponent } from "./Button";

describe("Test for the Button Component", () => {
  let container = null as any;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("It should  render  a  button", () => {
    const text = "Click me";
    render(<ButtonComponent text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("It  should be clickable", async () => {
    const text = "Button";
    const onChange = jest.fn();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<ButtonComponent text={text} onClick={onChange} />);
    });
    const button = screen.getByTestId("toggle");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
