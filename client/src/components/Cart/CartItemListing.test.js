/**
 * @jest-environment jsdom
 */

// Pass an item
// Test that items are shown
  // Test for correct title/price/quantity/total

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItemListing from "./CartItemListing";

const item = {
  title: "iPhone",
  quantity: 100,
  price: 200
}

const renderCart = () => {
  render(<CartItemListing items={[item]} />);
}

test('cart contains correct item title', () => {
  renderCart();
  expect(screen.getByText('iPhone')).toBeInTheDocument();
});

test('cart contains correct item price', () => {
  renderCart();
  expect(screen.getByText('100')).toBeInTheDocument();
});

test('cart contains correct item quantity', () => {
  renderCart();
  expect(screen.getByText('$200')).toBeInTheDocument();
});

test('cart displays correct item total price', () => {
  renderCart();
  expect(screen.getByText(/20000/)).toBeInTheDocument();
});