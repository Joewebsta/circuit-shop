/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  beforeEach(() => jest.resetAllMocks());

  const productProps = {
    productId: 1,
    productTitle: "DJI Air 2S",
    price: 1299.99,
    quantityInStock: 100,
    imageUrl:
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ",
    handleAddProductToCart: jest.fn(),
    handleDeleteProduct: jest.fn(),
    handleEditProduct: jest.fn(),
  };

  test("renders correctly", () => {
    render(<Product {...productProps} />);

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

    screen.debug();
  });

  test("handleDeleteProduct is called", async () => {
    render(<Product {...productProps} />);

    const deleteButton = screen.getByTestId("delete-button");

    await user.click(deleteButton);
    expect(productProps.handleDeleteProduct).toHaveBeenCalledTimes(1);
  });

  test("edit button click displays the product edit form", async () => {
    user.setup();
    render(<Product {...productProps} />);

    const editButton = screen.getByRole("button", { name: /edit/i });
    await user.click(editButton);

    const formElement = screen.getByTestId("editProductForm");
    const headerElement = screen.getByRole("heading", {
      name: /edit product/i,
    });
    const updateButton = screen.getByRole("button", { name: /update/i });
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    expect(updateButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
  });

  test("handleAddProductToCart is called", async () => {
    user.setup();
    render(<Product {...productProps} />);

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addToCartButton);
    expect(productProps.handleAddProductToCart).toHaveBeenCalledTimes(1);
  });
});
