import React from "react";

const ProductActions = ({
  onEditButtonClick,
  isEditFormVisible,
  onAddProductToCart,
  productId,
  productTitle,
  price,
  quantityInStock,
}) => {
  return (
    <div className="flex flec-col gap-4">
      <button
        className="py-[5px] px-3 bg-[#282322] text-white font-medium rounded"
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
