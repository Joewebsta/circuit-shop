/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  beforeEach(async () => {
    await act(async () => render(<App />));
  });

  test("renders App component", async () => {
    const circuitShopHeader = screen.getByText(/circuit shop/i);
    expect(circuitShopHeader).toBeInTheDocument();
  });

  test("renders a list of products", async () => {
    const products = await screen.findAllByRole("listitem");
    expect(products).toHaveLength(2);
  });

  test.skip("should log an error if fetching products fails", async () => {
    render(<App />);
  });

  test("adds a new product", async () => {
    user.setup();

    const initialProductListItems = await screen.findAllByRole("listitem");
    expect(initialProductListItems).toHaveLength(2);

    const addProductButton = screen.getByRole("button", {
      name: /add a product/i,
    });
    await user.click(addProductButton);

    const nameInput = await screen.findByRole("textbox", {
      name: /product name/i,
    });
    await user.type(nameInput, "New Product");

    const priceInput = await screen.findByRole("spinbutton", {
      name: /price/i,
    });
    await user.type(priceInput, "10");

    const quantityInput = await screen.findByRole("spinbutton", {
      name: /quantity/i,
    });
    await user.type(quantityInput, "10");

    const imageUrlInput = await screen.findByRole("textbox", {
      name: /image url/i,
    });
    await user.type(imageUrlInput, "https://example.com/image.jpg");

    const addButton = await screen.findByRole("button", {
      name: /^add$/i,
    });
    await user.click(addButton);

    const newProductName = await screen.findByText("iPhone 14");
    expect(newProductName).toBeInTheDocument();

    const newProductPrice = await screen.findByText("$829.99");
    expect(newProductPrice).toBeInTheDocument();

    const newProductQuantity = await screen.findByText("10");
    expect(newProductQuantity).toBeInTheDocument();

    const newProductImageUrl = await screen.getByRole("img", {
      name: /image of iphone 14/i,
    });
    expect(newProductImageUrl).toBeInTheDocument();

    const productListItems = await screen.findAllByRole("listitem");
    expect(productListItems).toHaveLength(3);
  });

  test("edits a product", async () => {
    user.setup();

    const firstEditButton = (
      await screen.findAllByRole("button", {
        name: /edit/i,
      })
    )[0];

    await user.click(firstEditButton);

    const nameInput = await screen.getByRole("textbox", {
      name: /product name/i,
    });
    await user.clear(nameInput);
    await user.type(nameInput, "DJI Air 3S");

    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    expect(priceInput).toBeInTheDocument();
    await user.clear(priceInput);
    await user.type(priceInput, "1200");

    const quantityInput = await screen.getByRole("spinbutton", {
      name: /quantity/i,
    });
    await user.clear(quantityInput);
    await user.type(quantityInput, "1000");

    const imageUrlInput = await screen.getByRole("textbox", {
      name: /image url/i,
    });
    await user.clear(imageUrlInput);
    await user.type(
      imageUrlInput,
      "https://drive.google.com/uc?id=1nr2NpnyMdKnoHk1rfWAyQX7gj8A2Nms4"
    );

    const updateButton = await screen.findByRole("button", { name: /update/i });
    await user.click(updateButton);

    const updatedProductName = await screen.findByRole("heading", {
      name: /DJI Air 3S/i,
    });
    expect(updatedProductName).toBeInTheDocument();

    const updatedProductPrice = screen.getByText(/1200/);
    expect(updatedProductPrice).toBeInTheDocument();

    const updatedProductQty = screen.getByText(/1000/);
    expect(updatedProductQty).toBeInTheDocument();
  });

  test("deletes a product", async () => {
    user.setup();

    const productListItems = await screen.findAllByRole("listitem");
    expect(productListItems).toHaveLength(2);

    const firstDeleteIcon = (await screen.findAllByTestId("delete-button"))[0];
    await user.click(firstDeleteIcon);

    const updatedProductListItems = await screen.findAllByRole("listitem");
    expect(updatedProductListItems).toHaveLength(1);
  });

  test("adds product to cart", async () => {
    user.setup;

    const cartItemQty = screen.getByRole("cell", { name: /^2$/i });
    expect(cartItemQty).toBeInTheDocument();

    const cartTotalAmount = screen.getByRole("cell", { name: /\$599\.98/i });
    expect(cartTotalAmount).toBeInTheDocument();

    const metaQuestAddToCartButton = screen.getAllByRole("button", {
      name: /add to cart/i,
    })[0];

    await user.click(metaQuestAddToCartButton);

    const updatedCartItemQty = screen.getByRole("cell", { name: /^3$/i });
    expect(updatedCartItemQty).toBeInTheDocument();

    const updatedCartTotalAmount = screen.getByRole("cell", {
      name: /\$899\.97/i,
    });
    expect(updatedCartTotalAmount).toBeInTheDocument();
  });
});
