/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("adds a new product", async () => {
    userEvent.setup();

    const initialProductListItems = await screen.findAllByRole("listitem");
    expect(initialProductListItems).toHaveLength(2);

    const addProductButton = screen.getByRole("button", {
      name: /add a product/i,
    });
    await userEvent.click(addProductButton);

    const nameInput = await screen.findByRole("textbox", {
      name: /product name/i,
    });
    await userEvent.type(nameInput, "New Product");

    const priceInput = await screen.findByRole("spinbutton", {
      name: /price/i,
    });
    await userEvent.type(priceInput, "10");

    const quantityInput = await screen.findByRole("spinbutton", {
      name: /quantity/i,
    });
    await userEvent.type(quantityInput, "10");

    const imageUrlInput = await screen.findByRole("textbox", {
      name: /image url/i,
    });
    await userEvent.type(imageUrlInput, "https://example.com/image.jpg");

    const addButton = await screen.findByRole("button", {
      name: /^add$/i,
    });
    await userEvent.click(addButton);

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
    userEvent.setup();

    const firstEditButton = (
      await screen.findAllByRole("button", {
        name: /edit/i,
      })
    )[0];

    await userEvent.click(firstEditButton);

    const nameInput = await screen.getByRole("textbox", {
      name: /product name/i,
    });
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "DJI Air 3S");

    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    expect(priceInput).toBeInTheDocument();
    await userEvent.clear(priceInput);
    await userEvent.type(priceInput, "1200");

    const quantityInput = await screen.getByRole("spinbutton", {
      name: /quantity/i,
    });
    await userEvent.clear(quantityInput);
    await userEvent.type(quantityInput, "1000");

    const imageUrlInput = await screen.getByRole("textbox", {
      name: /image url/i,
    });
    await userEvent.clear(imageUrlInput);
    await userEvent.type(
      imageUrlInput,
      "https://drive.google.com/uc?id=1nr2NpnyMdKnoHk1rfWAyQX7gj8A2Nms4"
    );

    const updateButton = await screen.findByRole("button", { name: /update/i });
    await userEvent.click(updateButton);

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
    userEvent.setup();

    const productListItems = await screen.findAllByRole("listitem");
    expect(productListItems).toHaveLength(2);

    const firstDeleteIcon = (await screen.findAllByTestId("delete-button"))[0];
    await userEvent.click(firstDeleteIcon);

    const updatedProductListItems = await screen.findAllByRole("listitem");
    expect(updatedProductListItems).toHaveLength(1);
  });

  test("adds product to cart", async () => {
    userEvent.setup;

    const cartItemQty = screen.getByRole("cell", { name: /^2$/i });
    expect(cartItemQty).toBeInTheDocument();

    const cartTotalAmount = screen.getByRole("cell", { name: /\$599\.98/i });
    expect(cartTotalAmount).toBeInTheDocument();

    const metaQuestAddToCartButton = screen.getAllByRole("button", {
      name: /add to cart/i,
    })[0];

    await userEvent.click(metaQuestAddToCartButton);

    const updatedCartItemQty = screen.getByRole("cell", { name: /^3$/i });
    expect(updatedCartItemQty).toBeInTheDocument();

    const updatedCartTotalAmount = screen.getByRole("cell", {
      name: /\$899\.97/i,
    });
    expect(updatedCartTotalAmount).toBeInTheDocument();
  });

  test("checkout clears the cart items", async () => {
    userEvent.setup();

    const cartEmptyStateElement = screen.queryByText(/your cart is empty/i);
    expect(cartEmptyStateElement).not.toBeInTheDocument();

    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    await userEvent.click(checkoutButton);

    const cartEmptyStateElement2 = screen.queryByText(/your cart is empty/i);
    expect(cartEmptyStateElement2).toBeInTheDocument();
  });
});
