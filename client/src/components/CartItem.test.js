/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

const item = {
  title: "iPhone",
  quantity: 100,
  price: 100
}

const renderCartItem = () => {
  return render(
    <table>
      <tbody>
        <CartItem item={item} />
      </tbody>
    </table>
  );
};

test('Contains item title', () => {
  renderCartItem();
  expect(screen.getByText('iPhone')).toBeInTheDocument()
});

test('Contains item quantity', () => {
  renderCartItem();
  expect(screen.getByText('100')).toBeInTheDocument()
});

test('Contains price quantity', () => {
  renderCartItem();
  expect(screen.getByText('$100')).toBeInTheDocument()
});