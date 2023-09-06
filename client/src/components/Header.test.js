/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders circuit shop header", () => {
  render(<Header />);
  const headerElement = screen.getByText(/circuit shop/i);
  expect(headerElement).toBeInTheDocument();
});
