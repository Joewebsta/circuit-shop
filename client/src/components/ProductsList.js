import React from "react";
import Product from "./Product";

const ProductsList = ({
  products,
  onDeleteProduct,
  onEditProduct,
  onAddProductToCart,
}) => {
  const productList = () => {
    return products.map((product) => {
      const { _id, title, quantity, price } = product;
      return (
        <Product
          key={_id}
          productId={_id}
          productTitle={title}
          price={price}
          quantityInStock={quantity}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
          onAddProductToCart={onAddProductToCart}
        />
      );
    });
  };

  return (
    <div>
      <ul>{productList()}</ul>
    </div>
  );
};

export default ProductsList;
