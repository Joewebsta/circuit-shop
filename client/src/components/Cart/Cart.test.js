/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const items = [
    {
      createdAt: "2023-09-05T21:14:01.806Z",
      price: 1299.99,
      productId: "64f609940669a9a57b74dfb4",
      quantity: 3,
      title: "DJI Air 2S",
      updatedAt: "2023-09-10T18:02:13.661Z",
      __v: 0,
      _id: "64f79a19f010a878047df2ca",
    },
  ];

  test("renders cart correctly when cart is empty", () => {
    render(<Cart items={[]} handleCheckoutCart={jest.fn()} />);
    const emptyStateElement = screen.getByText(/Your cart is empty/i);
    expect(emptyStateElement).toBeInTheDocument();
  });

  test("renders cart correctly when cart contains items", () => {
    render(<Cart items={items} handleCheckoutCart={jest.fn()} />);

    const productColHeader = screen.getByRole("columnheader", {
      name: /product/i,
    });
    expect(productColHeader).toBeInTheDocument();

    const qtyColHeader = screen.getByRole("columnheader", { name: /qty/i });
    expect(qtyColHeader).toBeInTheDocument();

    const priceColHeader = screen.getByRole("columnheader", { name: /price/i });
    expect(priceColHeader).toBeInTheDocument();

    const productName = screen.getByRole("cell", { name: /DJI Air 2S/i });
    expect(productName).toBeInTheDocument();

    const productQty = screen.getByRole("cell", { name: "3" });
    expect(productQty).toBeInTheDocument();

    const productPrice = screen.getByRole("cell", { name: /\$1,299.99/i });
    expect(productPrice).toBeInTheDocument();

    const productTotalText = screen.getByRole("cell", { name: /total/i });
    expect(productTotalText).toBeInTheDocument();

    const productTotalAmount = screen.getByRole("cell", {
      name: /\$3,899.97/i,
    });
    expect(productTotalAmount).toBeInTheDocument();

    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    expect(checkoutButton).toBeInTheDocument();
  });

  test("handleCheckoutCart is called when checkout button is clicked", async () => {
    const handleCheckoutCart = jest.fn();
    user.setup();
    render(<Cart items={items} handleCheckoutCart={handleCheckoutCart} />);
    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    await user.click(checkoutButton);
    expect(handleCheckoutCart).toHaveBeenCalled();
  });
});
