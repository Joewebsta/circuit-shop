import React from "react";
import Product from "../Product/Product";

const ProductsList = ({
  products,
  handleEditProduct,
  handleDeleteProduct,
  handleAddProductToCart,
}) => {
  const renderProductsList = () => {
    return products.map((product) => {
      const { _id, title, quantity, price } = product;
      return (
        <Product
          key={_id}
          productId={_id}
          productTitle={title}
          price={price}
          quantityInStock={quantity}
          handleDeleteProduct={handleDeleteProduct}
          handleEditProduct={handleEditProduct}
          handleAddProductToCart={handleAddProductToCart}
        />
      );
    });
  };

  return (
    <div>
      <ul>{renderProductsList()}</ul>
    </div>
  );
};

export default ProductsList;
