/**
 * @jest-environment jsdom
 */

// Pass an item
// Test that items are shown
// Test for correct title/price/quantity

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import ProductListing from "./ProductListing";

test("test", () => {
  expect(1).toBe(1);
});

// const product = {
//   key: "mock id",
//   title: "iPhone",
//   quantity: 100,
//   price: 200
// }

// const renderProductList = () => {
//   render(<ProductListing products={[product]} />);
// }

// test('cart contains correct item title', () => {
//   renderProductList();
//   expect(screen.getByText('iPhone')).toBeInTheDocument();
// });

// test('cart contains correct item price', () => {
//   renderProductList();
//   expect(screen.getByText(/100/)).toBeInTheDocument();
// });

// test('cart contains correct item quantity', () => {
//   renderProductList();
//   expect(screen.getByText(/200/)).toBeInTheDocument();
// });
