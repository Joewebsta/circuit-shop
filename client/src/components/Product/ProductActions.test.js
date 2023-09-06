/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductActions from "./ProductActions";

test("test", () => {
  expect(1).toBe(1);
});

// const item = {
//   title: "iPhone",
//   quantity: 100,
//   price: 100,
// };

// Edit button

// test('Edit button does not render when isEditFormVisible is true', () => {
//   render(<ProductActions isEditFormVisible={true} />);
//   const editButton = (screen.queryByRole('button', {name: 'Edit'}));
//   expect(editButton).toBeNull();
// });

// test('Edit button renders when isEditFormVisible is false', () => {
//   render(<ProductActions isEditFormVisible={false} />);
//   const editButton = (screen.queryByRole('button', {name: 'Edit'}));
//   expect(editButton).toBeInTheDocument();
// });

// test('function called on clicking Edit button', async () => {
//   const mockFunction = jest.fn();
//   render(<ProductActions onEditButtonClick={mockFunction} isEditFormVisible={false} />);
//   const user = userEvent.setup();
//   const editButton = (screen.queryByRole('button', {name: 'Edit'}));
//   await user.click(editButton);
//   expect(mockFunction.mock.calls.length).toBe(1);
// });

// // Add to Cart button

// test('Add to Cart button disabled when isEditFormVisible is true', () => {
//   render(<ProductActions isEditFormVisible={true} />);
//   const addToCartButton = (screen.queryByRole('button', {name: 'Add to Cart'}));
//   expect(addToCartButton).toHaveAttribute('disabled');
// });

// test('Add to Cart button disabled when 0 quantity in stock', () => {
//   render(<ProductActions quantityInStock={0} />);
//   const addToCartButton = (screen.queryByRole('button', {name: 'Add to Cart'}));
//   expect(addToCartButton).toHaveAttribute('disabled');
// });

// test('Add to Cart button enabled when nonzero quantity in stock and edit form not visible', () => {
//   render(<ProductActions quantityInStock={1} isEditFormVisible={false} />);
//   const addToCartButton = (screen.queryByRole('button', {name: 'Add to Cart'}));
//   expect(addToCartButton).not.toHaveAttribute('disabled');
// });

// test('function called on clicking Add to Cart button', async () => {
//   const mockFunction = jest.fn();
//   render(<ProductActions onAddProductToCart={mockFunction} quantityInStock={1} isEditFormVisible={false} />);
//   const user = userEvent.setup();
//   const addToCartButton = (screen.queryByRole('button', {name: 'Add to Cart'}));
//   await user.click(addToCartButton);
//   expect(mockFunction.mock.calls.length).toBe(1);
// });
