/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ProductEditFrom from "./ProductEditForm";

describe("ProductEditForm", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const productProps = {
    productId: 1,
    productTitle: "DJI Air 2S",
    price: 1299.99,
    quantityInStock: 100,
    imageUrl:
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ",
    handleEditProduct: jest.fn(),
    handleCancelButtonClick: jest.fn(),
    hideProductEditForm: jest.fn(),
  };

  test("renders correctly", () => {
    render(<ProductEditFrom {...productProps} />);

    const editProductHeader = screen.getByRole("heading", {
      name: /edit product/i,
    });
    expect(editProductHeader).toBeInTheDocument();

    const productInput = screen.getByRole("textbox", { name: /product name/i });
    expect(productInput).toBeInTheDocument();
    expect(productInput).toHaveValue(productProps.productTitle);

    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    expect(priceInput).toBeInTheDocument();
    expect(priceInput).toHaveValue(productProps.price);

    const quantityInput = screen.getByRole("spinbutton", { name: /quantity/i });
    expect(quantityInput).toBeInTheDocument();
    expect(quantityInput).toHaveValue(productProps.quantityInStock);

    const imageUrlInput = screen.getByRole("textbox", { name: /image url/i });
    expect(imageUrlInput).toBeInTheDocument();
    expect(imageUrlInput).toHaveValue(productProps.imageUrl);

    const updateButton = screen.getByRole("button", { name: /update/i });
    expect(updateButton).toBeInTheDocument();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    expect(cancelButton).toBeInTheDocument();
  });

  test("handleEditProduct is called with updated product info", async () => {
    user.setup();
    render(<ProductEditFrom {...productProps} />);

    const productInput = screen.getByRole("textbox", { name: /product name/i });
    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    const quantityInput = screen.getByRole("spinbutton", { name: /quantity/i });
    const imageUrlInput = screen.getByRole("textbox", { name: /image url/i });
    const updateButton = screen.getByRole("button", { name: /update/i });

    await user.clear(productInput);
    await user.clear(priceInput);
    await user.clear(quantityInput);
    await user.clear(imageUrlInput);

    await user.type(productInput, "New product");
    await user.type(priceInput, "10");
    await user.type(quantityInput, "10");
    await user.type(
      imageUrlInput,
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
    );

    await user.click(updateButton);
    expect(productProps.handleEditProduct).toHaveBeenCalledWith(
      1,
      "New product",
      "10",
      "10",
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
    );
  });

  test("handleCancelButtonClick is called", async () => {
    user.setup();
    render(<ProductEditFrom {...productProps} />);

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);

    expect(productProps.handleCancelButtonClick).toHaveBeenCalledTimes(1);
  });
});
