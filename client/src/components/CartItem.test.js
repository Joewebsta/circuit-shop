/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

test('Contains item title', () => {
  const item = {
    title: "iPhone",
    quantity: 100,
    price: 100
  }

  render(
    <table>
      <tbody>
        <CartItem item={item} />
      </tbody>
    </table>
  );

  expect(screen.getByText('iPhone')).toBeInTheDocument()
});

test('Contains item quantity', () => {
  const item = {
    title: "iPhone",
    quantity: 100,
    price: 100
  }

  screen.debug()
  render(<CartItem item={item} />);
  expect(screen.getByText('100')).toBeInTheDocument()
});

test('Contains price quantity', () => {
  const item = {
    title: "iPhone",
    quantity: 100,
    price: 100
  }

  render(<CartItem item={item} />);
  expect(screen.getByText('$100')).toBeInTheDocument()
});