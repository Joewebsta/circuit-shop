import React from "react";
import ProductsList from "./ProductsList";
import { IconPlus } from "@tabler/icons-react";

const Products = ({
  products,
  handleEditProduct,
  handleDeleteProduct,
  handleDisplayNewProductForm,
  handleAddProductToCart,
}) => {
  return (
    <main className="w-product">
      <div className="flex items-center mb-5 justify-between">
        <h2 className="text-3xl font-bold ">Products</h2>
        <button
          className="flex gap-2 items-center font-medium"
          onClick={handleDisplayNewProductForm}
        >
          <IconPlus size="20" data-testid="products-plus-icon" />
          Add A Product
        </button>
      </div>
      <ProductsList
        products={products}
        handleDeleteProduct={handleDeleteProduct}
        handleEditProduct={handleEditProduct}
        handleAddProductToCart={handleAddProductToCart}
      />
    </main>
  );
};

export default Products;
