import React, { useState } from "react";
import ProductEditForm from "./ProductEditForm";
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
      <div className="">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">{productTitle}</h3>
          <p className="text-lg price font-medium">${price}</p>
        </div>
        <p
          className={`quantity ${
            !quantityInStock && "none-left"
          } mb-8 text-[#5D534F]`}
        >
          {quantityInStock} left in stock
        </p>
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
