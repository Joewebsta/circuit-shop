import React, { useState } from "react";
import ProductEditForm from "./ProductEditForm";
import ProductContent from "./ProductContent";
import ProductActions from "./ProductActions";
import { IconTrash } from "@tabler/icons-react";

const Product = ({
  productId,
  productTitle,
  price,
  quantityInStock,
  handleEditProduct,
  handleDeleteProduct,
  handleAddProductToCart,
}) => {
  const [isEditModeActive, setIsEditModeActive] = useState(false);

  const handleEditButtonClick = () => setIsEditModeActive(true);
  const handleCancelButtonClick = () => hideProductEditForm();
  const hideProductEditForm = () => setIsEditModeActive(false);

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
    handleDeleteProduct(productId);
  };

  return (
    <li className="border-b border-[#BFB9B2] p-5 first:border-t">
      <div className="flex gap-5">
        <img
          src="https://drive.google.com/uc?id=11gsyIIf5D-q92SIbRlkxcvn_DWo7p6vq"
          width="128px"
          alt=""
        />
        <div className="flex-1">
          <ProductContent
            productTitle={productTitle}
            price={price}
            quantityInStock={quantityInStock}
          />
          <div className="flex justify-between items-center">
            <ProductActions
              onEditButtonClick={handleEditButtonClick}
              isEditModeActive={isEditModeActive}
              handleAddProductToCart={handleAddProductToCart}
              productId={productId}
              productTitle={productTitle}
              price={price}
              quantityInStock={quantityInStock}
            />
            <button className="delete-button" onClick={handleDeleteButtonClick}>
              <IconTrash size={20} color="#888888" />
            </button>
          </div>
        </div>
      </div>

      {isEditModeActive && (
        <ProductEditForm
          productTitle={productTitle}
          price={price}
          quantityInStock={quantityInStock}
          handleEditProduct={handleEditProduct}
          productId={productId}
          onHandleCancelButtonClick={handleCancelButtonClick}
          hideProductEditForm={hideProductEditForm}
        />
      )}
    </li>
  );
};

export default Product;