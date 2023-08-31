import React from "react";

const ProductActions = ({
  productId,
  productTitle,
  price,
  quantityInStock,
  onEditButtonClick,
  onAddProductToCart,
  isEditFormVisible,
}) => {
  return (
    <div className="flex gap-4">
      <button
        className="py-[5px] px-3 bg-[#030303] text-white font-medium rounded disabled:text-[#4F4F4F]"
        onClick={() =>
          onAddProductToCart(productId, productTitle, price, quantityInStock)
        }
        disabled={!quantityInStock || isEditFormVisible}
      >
        Add to Cart
      </button>
      {isEditFormVisible ? null : (
        <button
          className="py-[5px] px-3 text font-medium"
          onClick={onEditButtonClick}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default ProductActions;
