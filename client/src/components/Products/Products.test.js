/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Products from "./Products";

describe("Products", () => {
  const products = [
    {
      createdAt: "2023-09-04T16:45:08.238Z",
      imageUrl:
        "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ",
      price: 1299.99,
      quantity: 3,
      title: "DJI Air 2S",
      updatedAt: "2023-09-10T18:02:13.578Z",
      __v: 0,
      _id: "64f609940669a9a57b74dfb4",
    },
  ];

  const handlerProps = {
    handleEditProduct: jest.fn(),
    handleDeleteProduct: jest.fn(),
    handleDisplayNewProductForm: jest.fn(),
    handleAddProductToCart: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
    render(<Products products={products} {...handlerProps} />);
  });

  test("renders correctly", () => {
    const productsHeading = screen.getByRole("heading", { name: /Products/i });
    expect(productsHeading).toBeInTheDocument();

    const productHeading = screen.getByRole("heading", { name: /DJI Air 2S/i });
    expect(productHeading).toBeInTheDocument();

    const priceElement = screen.getByText(/\$1,299.99/i);
    expect(priceElement).toBeInTheDocument();

    const qtyNumElement = screen.getByText(/3/i);
    expect(qtyNumElement).toBeInTheDocument();

    const qtyTextElement = screen.getByText(/left in stock/i);
    expect(qtyTextElement).toBeInTheDocument();

    const plusIcon = screen.getByTestId("products-plus-icon");
    expect(plusIcon).toBeInTheDocument();

    const addProductButton = screen.getByRole("button", {
      name: /Add a product/i,
    });
    expect(addProductButton).toBeInTheDocument();

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    expect(addToCartButton).toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: /edit/i });
    expect(editButton).toBeInTheDocument();
  });

  test("handleDisplayNewProductForm is called", async () => {
    user.setup();
    const addProductButton = screen.getByRole("button", {
      name: /Add a product/i,
    });

    expect(addProductButton).toBeInTheDocument();
    await user.click(addProductButton);

    expect(handlerProps.handleDisplayNewProductForm).toHaveBeenCalledTimes(1);
  });
});
