/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItemListing from "./CartItemListing";

describe("CartItemListing", () => {
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

  test("renders correctly", () => {
    render(<CartItemListing items={items} />);

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

    screen.debug();
  });
});
