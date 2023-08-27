import React from "react";
import Product from "./Product";

const ProductListing = ({
  products,
  onDeleteProduct,
  isEditFormVisible,
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
          isEditFormVisible={isEditFormVisible}
        />
      );
    });
  };

  return (
    <div className="product-listing">
      <h2 className="text-3xl font-bold mb-5">Products</h2>
      <ul className="product-details">{productList()}</ul>
    </div>
  );
};

export default ProductListing;
