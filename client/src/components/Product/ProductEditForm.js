import React, { useState } from "react";

const ProductEditForm = ({
  productId,
  productTitle,
  price,
  quantityInStock,
  imageUrl,
  handleEditProduct,
  onHandleCancelButtonClick,
  hideProductEditForm,
}) => {
  const [newTitle, setNewTitle] = useState(productTitle);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantityInStock);
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);

  const handleNewTitleChange = (event) => setNewTitle(event.target.value);
  const handleNewPriceChange = (event) => setNewPrice(event.target.value);
  const handleNewQuantityChange = (event) => setNewQuantity(event.target.value);
  const handleNewImageUrlChange = (event) => setNewImageUrl(event.target.value);

  const handleUpdateButtonClick = (e) => {
    e.preventDefault();
    handleEditProduct(
      productId,
      newTitle,
      newPrice,
      newQuantity,
      newImageUrl,
      resetProductEditForm
    );
    hideProductEditForm();
  };

  const resetProductEditForm = () => {
    setNewTitle("");
    setNewPrice("");
    setNewQuantity("");
  };

  return (
    <div
      className="edit-form bg-[#ECEAE8] mt-5 p-5 shadow-inner"
      data-testid="editProductForm"
    >
      <h3 className="font-medium mb-6">Edit Product</h3>
      <form className="gap-3">
        <div className="flex flex-col gap-3 mb-6">
          <div className="input-group">
            <label className="inline-block w-[140px]" htmlFor="product-name">
              Product Name
            </label>
            <input
              type="text"
              className="py-1 px-3 rounded-sm"
              id="product-name"
              value={newTitle}
              aria-label="Product Name"
              onChange={handleNewTitleChange}
              required
            />
          </div>

          <div className="input-group">
            <label className="inline-block w-[140px]" htmlFor="product-price">
              Price
            </label>
            <input
              type="number"
              className="py-1 px-3 rounded-sm"
              id="product-price"
              value={newPrice}
              aria-label="Product Price"
              onChange={handleNewPriceChange}
              required
            />
          </div>

          <div className="input-group">
            <label
              className="inline-block w-[140px]"
              htmlFor="product-quantity"
            >
              Quantity
            </label>
            <input
              type="number"
              className="py-1 px-3 rounded-sm"
              id="product-quantity"
              value={newQuantity}
              aria-label="Product Quantity"
              onChange={handleNewQuantityChange}
              required
            />
          </div>

          <div className="input-group">
            <label
              className="inline-block w-[140px]"
              htmlFor="product-image-url"
            >
              Image URL
            </label>
            <input
              type="text"
              className="py-1 px-3 rounded-sm"
              id="product-image-url"
              value={newImageUrl}
              aria-label="Product Image URL"
              onChange={handleNewImageUrlChange}
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="py-[5px] px-3 bg-[#030303] text-white font-medium rounded"
            onClick={handleUpdateButtonClick}
          >
            Update
          </button>
          <button
            type="button"
            className="py-[5px] px-3 text font-medium"
            onClick={onHandleCancelButtonClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
