import React from 'react';
import ProductListing from './ProductListing';
import AddForm from './AddForm';

const Products = (props) => {
  return (
    <main>
      <ProductListing {...props} />
      <AddForm
        onDisplayNewProductForm={props.onDisplayNewProductForm}
        isAddFormVisible={props.isAddFormVisible}
        onHideNewProductForm={props.onHideNewProductForm}
        onAddNewProduct={props.onAddNewProduct}
      />
    </main>
  )
}





export default Products;