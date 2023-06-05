import React, { useState } from 'react';

const AddForm = ({ onDisplayNewProductForm, onHideNewProductForm, isAddFormVisible, onAddNewProduct }) => {
  const [productTitle, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleProductNameChange = (event) => setProductName(event.target.value);
  const handleProductPriceChange = (event) => setProductPrice(event.target.value);
  const handleProductQuantityChange = (event) => setProductQuantity(event.target.value);

  const submitForm = (event) => {
    event.preventDefault();
    onAddNewProduct(productTitle, productPrice, productQuantity, clearProductForm);
  }

  const handleCancelButtonClick = () => {
    onHideNewProductForm();
    clearProductForm();
  }

  const clearProductForm = () => {
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
  }

  return (
    <div className={`add-form ${isAddFormVisible && "visible"}`}>
      <p><button className="add-product-button" onClick={onDisplayNewProductForm}>Add A Product</button></p>
      <h3>Add Product</h3>
      <form onSubmit={submitForm} >
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={productTitle}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
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
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={productQuantity}
            onChange={handleProductQuantityChange}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleCancelButtonClick}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddForm;