import React from 'react';
import ProductListing from './ProductListing';
import AddForm from './AddForm';

const Products = (props) => {
  return (
    <main>
      <ProductListing {...props} />
      <AddForm
        onDisplayNewProductForm={props.onDisplayNewProductForm}
        onHideNewProductForm={props.onHideNewProductForm}
        onAddNewProduct={props.onAddNewProduct}
        isAddFormVisible={props.isAddFormVisible}
      />
    </main>
  )
}

export default Products;