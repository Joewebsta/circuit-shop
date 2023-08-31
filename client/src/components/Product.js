import React, { useState } from "react";
import ProductEditForm from "./ProductEditForm";
import ProductContent from "./Product/ProductContent";
import ProductActions from "./ProductActions";
import { IconTrash } from "@tabler/icons-react";

const Product = ({
  productId,
  productTitle,
  price,
  quantityInStock,
  onDeleteProduct,
  onEditProduct,
  onAddProductToCart,
}) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleEditButtonClick = () => setIsEditFormVisible(true);
  const handleCancelButtonClick = () => hideProductEditForm();
  const hideProductEditForm = () => setIsEditFormVisible(false);

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
    onDeleteProduct(productId);
  };

  return (
    <li className="border-b border-[#BFB9B2] p-5 first:border-t">
      <ProductContent
        productTitle={productTitle}
        price={price}
        quantityInStock={quantityInStock}
      />
      <div className="flex justify-between items-center">
        <ProductActions
          onEditButtonClick={handleEditButtonClick}
          isEditFormVisible={isEditFormVisible}
          onAddProductToCart={onAddProductToCart}
          productId={productId}
          productTitle={productTitle}
          price={price}
          quantityInStock={quantityInStock}
        />
        <button className="delete-button" onClick={handleDeleteButtonClick}>
          <IconTrash size={20} />
        </button>
      </div>

      {isEditFormVisible ? (
        <ProductEditForm
          productTitle={productTitle}
          price={price}
          quantityInStock={quantityInStock}
          onEditProduct={onEditProduct}
          productId={productId}
          onHandleCancelButtonClick={handleCancelButtonClick}
          hideProductEditForm={hideProductEditForm}
        />
      ) : null}
    </li>
  );
};

export default Product;
