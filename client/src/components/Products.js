import React from "react";
import ProductsList from "./ProductsList";
import AddForm from "./AddForm";
import { IconPlus } from "@tabler/icons-react";

const Products = ({
  products,
  onDeleteProduct,
  onDisplayNewProductForm,
  onHideNewProductForm,
  onAddNewProduct,
  isAddFormVisible,
  onEditProduct,
  onAddProductToCart,
}) => {
  return (
    <main className="products">
      <div className="flex items-center mb-5 justify-between">
        <h2 className="text-3xl font-bold ">Products</h2>
        <button
          className="flex gap-2 items-center font-medium"
          onClick={onDisplayNewProductForm}
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
