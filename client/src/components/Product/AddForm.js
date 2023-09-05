import React, { useState } from "react";

const AddForm = ({ handleAddNewProduct, handleHideNewProductForm }) => {
  const [productTitle, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImageURL, setProductImageURL] = useState("");

  const handleProductNameChange = (event) => setProductName(event.target.value);

  const handleProductPriceChange = (event) =>
    setProductPrice(event.target.value);

  const handleProductQuantityChange = (event) =>
    setProductQuantity(event.target.value);

  const handleProductImageURLChange = (event) =>
    setProductImageURL(event.target.value);

  const submitForm = (event) => {
    event.preventDefault();
    handleAddNewProduct(
      productTitle,
      productPrice,
      productQuantity,
      productImageURL,
      clearProductForm
    );

    handleHideNewProductForm();
  };

  const handleCancelButtonClick = () => {
    handleHideNewProductForm();
    clearProductForm();
  };

  const clearProductForm = () => {
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  };

  return (
    <div className="bg-[#f7f6f5] w-[500px] m-auto mt-16 p-7 rounded-md">
      <h3 className="text-2xl font-medium mb-9">Add Product</h3>
      <form onSubmit={submitForm}>
        <div className="flex flex-col gap-5 mb-9">
          <div className="flex items-center">
            <label className="w-32 inline-block" htmlFor="product-name">
              Product Name:
            </label>
            <input
              className="py-1 px-3 rounded-sm border border-[#e2dfdc] flex-grow"
              type="text"
              id="product-name"
              name="product-name"
              value={productTitle}
              onChange={handleProductNameChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-32 inline-block" htmlFor="product-price">
              Price:
            </label>
            <input
              className="py-1 px-3 rounded-sm flex-grow border border-[#e2dfdc]"
              type="number"
              id="product-price"
              name="product-price"
              min="0"
              step="0.01"
              value={productPrice}
              onChange={handleProductPriceChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-32 inline-block" htmlFor="product-quantity">
              Quantity:
            </label>
            <input
              className="py-1 px-3 rounded-sm border border-[#e2dfdc] flex-grow"
              type="number"
              id="product-quantity"
              name="product-quantity"
              min="0"
              value={productQuantity}
              onChange={handleProductQuantityChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="w-32 inline-block" htmlFor="product-quantity">
              Image URL:
            </label>
            <input
              className="py-1 px-3 rounded-sm border border-[#e2dfdc] flex-grow"
              type="text"
              id="product-image-url"
              name="product-image-url"
              min="0"
              value={productImageURL}
              onChange={handleProductImageURLChange}
              required
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="py-[5px] px-3 bg-[#030303] min-w-[110px] text-white font-medium rounded"
            type="submit"
          >
            Add
          </button>
          <button
            className="py-[5px] px-3 text font-medium"
            type="button"
            onClick={handleCancelButtonClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
