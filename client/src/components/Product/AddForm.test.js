/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddForm from "./AddForm";

describe("AddForm", () => {
  const formProps = {
    handleAddNewProduct: jest.fn(),
    handleHideNewProductForm: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
    render(<AddForm {...formProps} />);
  });

  test("renders correctly", () => {
    const h2Element = screen.getByRole("heading", { name: /add product/i });
    const productInput = screen.getByRole("textbox", { name: /product name/i });
    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    const quantityInput = screen.getByRole("spinbutton", { name: /quantity/i });
    const imgUrl = screen.getByRole("textbox", { name: /image url/i });
    const addButton = screen.getByRole("button", { name: /add/i });
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    expect(h2Element).toBeInTheDocument();
    expect(productInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
    expect(imgUrl).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("can change input fields", async () => {
    user.setup();

    const productInput = screen.getByRole("textbox", { name: /product name/i });
    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    const quantityInput = screen.getByRole("spinbutton", { name: /quantity/i });
    const imgUrl = screen.getByRole("textbox", { name: /image url/i });

    await user.type(productInput, "New product");
    expect(productInput).toHaveValue("New product");

    await user.type(priceInput, "100");
    expect(priceInput).toHaveValue(100);

    await user.type(quantityInput, "100");
    expect(quantityInput).toHaveValue(100);

    await user.type(
      imgUrl,
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
    );
    expect(imgUrl).toHaveValue(
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
    );
  });

  test("handeAddNewProduct is called", async () => {
    user.setup();

    const productInput = screen.getByRole("textbox", { name: /product name/i });
    const priceInput = screen.getByRole("spinbutton", { name: /price/i });
    const quantityInput = screen.getByRole("spinbutton", { name: /quantity/i });
    const imgUrl = screen.getByRole("textbox", { name: /image url/i });
    const addButton = screen.getByRole("button", { name: /add/i });

    await user.type(productInput, "New product");
    await user.type(priceInput, "100");
    await user.type(quantityInput, "100");
    await user.type(
      imgUrl,
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
    );

    await user.click(addButton);
    expect(formProps.handleAddNewProduct).toHaveBeenCalledWith(
      "New product",
      "100",
      "100",
      "https://drive.google.com/uc?id=1Ss1U77zQGUH77ggxTSUTQs0_bXturydZ"
    );
    expect(formProps.handleAddNewProduct).toHaveBeenCalledTimes(1);
  });

  test("handleHideNewProductForm is called", async () => {
    user.setup();

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);
    expect(formProps.handleHideNewProductForm).toHaveBeenCalledTimes(1);
  });
});
