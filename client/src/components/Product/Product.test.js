/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  test("renders correctly", () => {
    render(
      <Product
        productId={1}
        productTitle="DJI Air 2S"
        price={1299.99}
        quantityInStock={100}
        imageUrl="https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
        handleAddProductToCart={() => {}}
        handleDeleteProduct={() => {}}
        handleEditProduct={() => {}}
      />
    );

    const imgElement = screen.getByRole("img", {
      name: /image of dji air 2s/i,
    });
    expect(imgElement).toBeInTheDocument();

    const titleElement = screen.getByRole("heading", { name: /DJI Air 2S/i });
    expect(titleElement).toBeInTheDocument();

    const priceElement = screen.getByText(/\$1,299\.99/i);
    expect(priceElement).toBeInTheDocument();

    const qtyStockNumElement = screen.getByText(/100/i);
    expect(qtyStockNumElement).toBeInTheDocument();

    const qtyStockTextElement = screen.getByText(/left in stock/i);
    expect(qtyStockTextElement).toBeInTheDocument();

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    expect(addToCartButton).toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: /edit/i });
    expect(editButton).toBeInTheDocument();

    const deleteButton = screen.getByTestId("delete-button");
    expect(deleteButton).toBeInTheDocument();
  });

  // Click "Add to Cart"
  // Click "Edit"
  // Click Trashcan
});
