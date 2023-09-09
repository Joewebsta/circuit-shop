/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Overlay from "./Overlay";

describe("Overlay", () => {
  test("renders correctly", () => {
    const { container } = render(<Overlay></Overlay>);
    expect(container).toBeInTheDocument();
  });

  test("displays its children correctly", () => {
    render(
      <Overlay>
        <h1>Hello world</h1>
      </Overlay>
    );

    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();
  });
});
