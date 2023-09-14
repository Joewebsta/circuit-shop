/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import ProductsList from "./ProductsList";

describe("ProductList", () => {
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
    {
      createdAt: "2023-09-04T16:45:08.238Z",
      imageUrl:
        "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ",
      price: 1299.99,
      quantity: 3,
      title: "DJI Air 2S",
      updatedAt: "2023-09-10T18:02:13.578Z",
      __v: 0,
      _id: "64f609940669a9a57b74dfb5",
    },
  ];

  test("renders correctly", () => {
    render(
      <ProductsList
        products={[products[0]]}
        handleEditProduct={jest.fn()}
        handleDeleteProduct={jest.fn()}
        handleAddProductToCart={jest.fn()}
      />
    );

    const productHeading = screen.getByRole("heading", { name: /DJI Air 2S/i });
    expect(productHeading).toBeInTheDocument();

    const priceElement = screen.getByText(/\$1,299.99/i);
    expect(priceElement).toBeInTheDocument();

    const qtyNumElement = screen.getByText(/3/i);
    expect(qtyNumElement).toBeInTheDocument();

    const qtyTextElement = screen.getByText(/left in stock/i);
    expect(qtyTextElement).toBeInTheDocument();

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    expect(addToCartButton).toBeInTheDocument();

    const editButton = screen.getByRole("button", { name: /edit/i });
    expect(editButton).toBeInTheDocument();
  });

  test("renders correctly with more than 1 product", () => {
    render(
      <ProductsList
        products={products}
        handleEditProduct={jest.fn()}
        handleDeleteProduct={jest.fn()}
        handleAddProductToCart={jest.fn()}
      />
    );

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(products.length);
  });
});
