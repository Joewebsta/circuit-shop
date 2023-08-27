import React, { useState } from "react";
import ProductEditForm from "./ProductEditForm";
import ProductActions from "./ProductActions";

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

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
    onDeleteProduct(productId);
  };

  const handleEditButtonClick = () => setIsEditFormVisible(true);
  const handleCancelButtonClick = () => hideProductEditForm();
  const hideProductEditForm = () => setIsEditFormVisible(false);

  const displayEditForm = () => {
    return isEditFormVisible ? (
      <ProductEditForm
        productTitle={productTitle}
        price={price}
        quantityInStock={quantityInStock}
        onEditProduct={onEditProduct}
        productId={productId}
        onHandleCancelButtonClick={handleCancelButtonClick}
        hideProductEditForm={hideProductEditForm}
      />
    ) : null;
  };

  return (
    <li className="border-b p-5 first:border-t">
      <div className="">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">{productTitle}</h3>
          <p className="text-lg price">${price}</p>
        </div>

        <p className={`quantity ${!quantityInStock && "none-left"} mb-8`}>
          {quantityInStock} left in stock
        </p>
        <div className="flex justify-between">
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
            <span>X</span>
          </button>
        </div>
      </div>
      {displayEditForm()}
    </li>
  );
};

export default Product;
