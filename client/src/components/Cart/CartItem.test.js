/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItem", () => {
  const item = {
    createdAt: "2023-09-05T21:14:01.806Z",
    price: 1299.99,
    productId: "64f609940669a9a57b74dfb4",
    quantity: 3,
    title: "DJI Air 2S",
    updatedAt: "2023-09-10T18:02:13.661Z",
    __v: 0,
    _id: "64f79a19f010a878047df2ca",
  };

  test("renders cart correctly when cart is empty", () => {
    render(
      <table>
        <tbody>
          <CartItem item={item} />
        </tbody>
      </table>
    );

    const productName = screen.getByRole("cell", { name: /DJI Air 2S/i });
    expect(productName).toBeInTheDocument();

    const productQty = screen.getByRole("cell", { name: "3" });
    expect(productQty).toBeInTheDocument();

    const productPrice = screen.getByRole("cell", { name: /\$1,299.99/i });
    expect(productPrice).toBeInTheDocument();
  });
});
