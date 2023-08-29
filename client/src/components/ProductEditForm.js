import React, { useState } from "react";

const ProductEditForm = ({
  productId,
  productTitle,
  price,
  quantityInStock,
  onEditProduct,
  onHandleCancelButtonClick,
  hideProductEditForm,
}) => {
  const [newTitle, setNewTitle] = useState(productTitle);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantityInStock);

  const handleNewTitleChange = (event) => setNewTitle(event.target.value);
  const handleNewPriceChange = (event) => setNewPrice(event.target.value);
  const handleNewQuantityChange = (event) => setNewQuantity(event.target.value);

  const handleUpdateButtonClick = (e) => {
    e.preventDefault();
    onEditProduct(
      productId,
      newTitle,
      newPrice,
      newQuantity,
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
    <div className="edit-form bg-[#ECEAE8] mt-5 p-5">
      <h3 className="font-medium">Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            aria-label="Product Name"
            onChange={handleNewTitleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={newPrice}
            aria-label="Product Price"
            onChange={handleNewPriceChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={newQuantity}
            aria-label="Product Quantity"
            onChange={handleNewQuantityChange}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={handleUpdateButtonClick}>
            Update
          </button>
          <button type="button" onClick={onHandleCancelButtonClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;
