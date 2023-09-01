import React from "react";
import ProductsList from "./ProductsList";
import AddForm from "./AddForm";
import { IconPlus } from "@tabler/icons-react";

const Products = ({
  products,
  onDeleteProduct,
  handleDisplayNewProductForm,
  onHideNewProductForm,
  onAddNewProduct,
  onEditProduct,
  onAddProductToCart,
  isAddFormVisible,
}) => {
  return (
    <main className="w-product">
      <div className="flex items-center mb-5 justify-between">
        <h2 className="text-3xl font-bold ">Products</h2>
        <button
          className="flex gap-2 items-center font-medium"
          onClick={handleDisplayNewProductForm}
        >
          <IconPlus size="20" />
          Add A Product
        </button>
      </div>
      <ProductsList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
        onAddProductToCart={onAddProductToCart}
      />
    </main>
  );
};

export default Products;
