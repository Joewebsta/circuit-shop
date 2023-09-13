/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductContent from "./ProductContent";

describe("ProductContent", () => {
  test("renders correctly", () => {
    render(
      <ProductContent
        productTitle={"Apple iPhone"}
        price={9.99}
        quantityInStock={10}
      />
    );

    const titleElement = screen.getByText(/Apple iPhone/i);
    expect(titleElement).toBeInTheDocument();

    const priceElement = screen.getByText(/\$9.99/i);
    expect(priceElement).toBeInTheDocument();

    const qtyNumElement = screen.getByText(/10/i);
    expect(qtyNumElement).toBeInTheDocument();

    const qtyTextElement = screen.getByText(/left in stock/i);
    expect(qtyTextElement).toBeInTheDocument();
  });

  test("renders red text when quantityInStock is zero", () => {
    render(
      <ProductContent
        productTitle={"Apple iPhone"}
        price={9.99}
        quantityInStock={0}
      />
    );

    const qtyTextElement = screen.getByText(/left in stock/i);
    expect(qtyTextElement).toBeInTheDocument();
    expect(qtyTextElement).toHaveClass("text-red-700");
  });
});
