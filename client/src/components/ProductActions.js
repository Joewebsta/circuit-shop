import React from 'react';

const ProductActions = ({
  onEditButtonClick,
  isEditFormVisible,
  onAddProductToCart,
  productId,
  productTitle,
  price,
  quantityInStock
}) => {
  return (
    <div className="actions product-actions">
      <button
        className="add-to-cart"
        onClick={() => onAddProductToCart(productId, productTitle, price, quantityInStock)}
        disabled={!quantityInStock || isEditFormVisible}
      >
        Add to Cart
      </button>
      {isEditFormVisible
        ? null
        : <button className="edit" onClick={onEditButtonClick}>Edit</button>
      }
    </div>
  )
}

export default ProductActions;