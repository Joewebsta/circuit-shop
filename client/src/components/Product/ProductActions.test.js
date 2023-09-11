/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ProductActions from "./ProductActions";

describe("ProductActions", () => {
  const productActionsProps = {
    productId: 1,
    productTitle: "DJI Air 2S",
    price: 1299.99,
    quantityInStock: 100,
    handleEditButtonClick: jest.fn(),
    handleAddProductToCart: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("renders correctly when edit mode is inactive", () => {
    render(
      <ProductActions {...productActionsProps} isEditModeActive={false} />
    );

    const addButton = screen.getByRole("button", { name: /add to cart/i });
    const editButton = screen.getByRole("button", { name: /edit/i });

    expect(addButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  test("renders correctly when edit mode is active", () => {
    render(<ProductActions {...productActionsProps} isEditModeActive={true} />);

    const addButton = screen.getByRole("button", { name: /add to cart/i });
    const editButton = screen.queryByText(/edit/i);

    expect(addButton).toBeInTheDocument();
    expect(editButton).not.toBeInTheDocument();
  });

  test("handleEditButtonClick is called ", async () => {
    user.setup();

    render(
      <ProductActions {...productActionsProps} isEditModeActive={false} />
    );

    const editButton = screen.getByRole("button", { name: /edit/i });
    expect(editButton).toBeInTheDocument();

    await user.click(editButton);

    expect(productActionsProps.handleEditButtonClick).toHaveBeenCalledTimes(1);
  });

  test("handleAddProductToCart is called ", async () => {
    user.setup();

    render(
      <ProductActions {...productActionsProps} isEditModeActive={false} />
    );

    const addButton = screen.getByRole("button", { name: /add to cart/i });
    expect(addButton).toBeInTheDocument();

    await user.click(addButton);

    expect(productActionsProps.handleAddProductToCart).toHaveBeenCalledTimes(1);
    expect(productActionsProps.handleAddProductToCart).toHaveBeenCalledWith(
      1,
      "DJI Air 2S",
      1299.99,
      100
    );
  });

  test('disables "Add to Cart" button when quantityInStock is zero', () => {
    render(
      <ProductActions
        {...productActionsProps}
        isEditModeActive={false}
        quantityInStock={0}
      />
    );

    const addButton = screen.getByRole("button", { name: /add to cart/i });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toBeDisabled();
  });
});
