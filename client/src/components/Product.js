import React, { useState } from 'react';
import ProductEditForm from './ProductEditForm';
import ProductActions from './ProductActions';

const Product = ({ productId, productTitle, price, quantityInStock, onDeleteProduct, onEditProduct, onAddProductToCart }) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
    onDeleteProduct(productId);
  }

  const handleEditButtonClick = () => {
    setIsEditFormVisible(true);
  }

  const handleCancelButtonClick = () => {
    hideProductEditForm();
  }

  const hideProductEditForm = () => {
    setIsEditFormVisible(false);
  }

  const displayEditForm = () => {
    return isEditFormVisible ?
      < ProductEditForm
        productTitle={productTitle}
        price={price}
        quantityInStock={quantityInStock}
        onEditProduct={onEditProduct}
        productId={productId}
        onHandleCancelButtonClick={handleCancelButtonClick}
        hideProductEditForm={hideProductEditForm}
      />
      : null
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{productTitle}</h3>
        <p className="price">{price}</p>
        <p className={`quantity ${!quantityInStock && 'none-left'}`}>
          {quantityInStock} left in stock
        </p>
        <ProductActions
          onEditButtonClick={handleEditButtonClick}
          isEditFormVisible={isEditFormVisible}
          onAddProductToCart={onAddProductToCart}
          productId={productId}
          productTitle={productTitle}
          price={price}
          quantityInStock={quantityInStock}
        />
        <button className="delete-button" onClick={handleDeleteButtonClick} ><span>X</span></button>
      </div>
      {displayEditForm()}
    </li>
  )
}

export default Product;