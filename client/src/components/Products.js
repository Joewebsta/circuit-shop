import React from "react";
import ProductsList from "./ProductsList";
import AddForm from "./AddForm";

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
        <AddForm
          onDisplayNewProductForm={onDisplayNewProductForm}
          onHideNewProductForm={onHideNewProductForm}
          onAddNewProduct={onAddNewProduct}
          isAddFormVisible={isAddFormVisible}
        />
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
