import React from "react";

const ProductActions = ({
  productId,
  productTitle,
  price,
  quantityInStock,
  handleEditButtonClick,
  handleAddProductToCart,
  isEditModeActive,
}) => {
  return (
    <div className="flex gap-4">
      <button
        className="py-[5px] px-3 bg-[#030303] text-white font-medium rounded disabled:text-[#4F4F4F] disabled:bg-[#B0B0B0] disabled:cursor-not-allowed"
        onClick={() =>
          handleAddProductToCart(
            productId,
            productTitle,
            price,
            quantityInStock
          )
        }
        disabled={!quantityInStock || isEditModeActive}
      >
        Add to Cart
      </button>
      {!isEditModeActive && (
        <button
          className="py-[5px] px-3 text font-medium"
          onClick={handleEditButtonClick}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default ProductActions;
