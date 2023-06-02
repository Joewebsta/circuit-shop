import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>Checkout</button>
      </div>
    </header>
  );
}

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

const ProductListing = ({ products, onDeleteProduct, onEditProduct, isUpdateFormVisible, onUpdateProduct }) => {
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
          onUpdateProduct={onUpdateProduct}
          isUpdateFormVisible={isUpdateFormVisible}
        />
      )
    })
  }

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-details">
        {productList()}
      </ul>
    </div>
  )
}

const Product = ({ productId, productTitle, price, quantityInStock, onDeleteProduct, onUpdateProduct }) => {
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
    onDeleteProduct(productId);
  }

  const handleEditButtonClick = () => {
    setIsUpdateFormVisible(true);
  }

  const handleCancelButtonClick = () => {
    hideProductUpdateForm();
  }

  const hideProductUpdateForm = () => {
    setIsUpdateFormVisible(false);
  }

  const displayEditForm = () => {
    return isUpdateFormVisible ?
      < ProductUpdateForm
        productTitle={productTitle}
        price={price}
        quantityInStock={quantityInStock}
        onUpdateProduct={onUpdateProduct}
        productId={productId}
        onHandleCancelButtonClick={handleCancelButtonClick}
        hideProductUpdateForm={hideProductUpdateForm}
      />
      : null
  }

  return (
    <li className="product">
      <div className="product-details">
        <h3>{productTitle}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantityInStock} left in stock</p>
        <Actions onEditButtonClick={handleEditButtonClick} isUpdateFormVisible={isUpdateFormVisible} />
        <button className="delete-button" onClick={handleDeleteButtonClick} ><span>X</span></button>
      </div>
      {displayEditForm()}
    </li>
  )
}

const Actions = ({ onEditButtonClick, isUpdateFormVisible }) => {
  const displayEditButton = () => {
    return isUpdateFormVisible ?
      null :
      <button className="edit" onClick={onEditButtonClick}>Edit</button>
  }

  return (
    <div className="actions product-actions">
      <button className="add-to-cart">Add to Cart</button>
      {displayEditButton()}
    </div>
  )
}

const ProductUpdateForm = ({ productId, productTitle, price, quantityInStock, onUpdateProduct, onHandleCancelButtonClick, hideProductUpdateForm }) => {
  const [newTitle, setNewTitle] = useState(productTitle);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantityInStock);

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  }

  const handleNewPriceChange = (event) => {
    setNewPrice(event.target.value);
  }

  const handleNewQuantityChange = (event) => {
    setNewQuantity(event.target.value);
  }

  const handleUpdateButtonClick = (e) => {
    e.preventDefault();
    onUpdateProduct(productId, newTitle, newPrice, newQuantity, resetProductUpdateForm);
    hideProductUpdateForm();
  }

  const resetProductUpdateForm = () => {
    setNewTitle("");
    setNewPrice("");
    setNewQuantity("");
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            aria-label="Product Name"
            onChange={handleNewTitleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={newPrice}
            aria-label="Product Price"
            onChange={handleNewPriceChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={newQuantity}
            aria-label="Product Quantity"
            onChange={handleNewQuantityChange}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={handleUpdateButtonClick}>Update</button>
          <button type="button" onClick={onHandleCancelButtonClick}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

const AddForm = ({ onDisplayNewProductForm, onHideNewProductForm, isAddFormVisible, onAddNewProduct }) => {
  const [productTitle, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  }

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  }

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();
    onAddNewProduct(productTitle, productPrice, productQuantity, clearProductForm);
  }

  const clearProductForm = () => {
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
  }

  return (
    <div className={`add-form ${isAddFormVisible && "visible"}`}>
      <p><button className="add-product-button" onClick={onDisplayNewProductForm}>Add A Product</button></p>
      <h3>Add Product</h3>
      <form onSubmit={submitForm} >
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={productTitle}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={productPrice}
            onChange={handleProductPriceChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={productQuantity}
            onChange={handleProductQuantityChange}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onHideNewProductForm} >Cancel</button>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [products, setProducts] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get('/api/products')
      const products = await response.data;
      setProducts(products);
    }

    getAllProducts();
  }, []);

  const handleAddNewProduct = async (name, price, quantity, clearProductForm) => {
    const obj = { title: name, price: parseInt(price, 10), quantity: parseInt(quantity, 10) };
    const response = await axios.post('/api/products', obj);
    const newProduct = await response.data;
    const updatedProducts = products.concat(newProduct);
    setProducts(updatedProducts);
    clearProductForm();
  }

  const handleUpdateProduct = async (productId, newTitle, newPrice, newQuantity, callback) => {
    const updatedProduct = { title: newTitle, price: newPrice, quantity: newQuantity }
    const response = await axios.put(`/api/products/${productId}`, updatedProduct);
    const editedProduct = response.data;
    setProducts(products.map(product => product._id === productId ? editedProduct : product));
    callback();
  }

  const handleDeleteProduct = async (productId) => {
    await axios.delete(`/api/products/${productId}`);
    const updatedProducts = products.filter(product => product._id !== productId);
    setProducts(updatedProducts);
  }

  const handleDisplayNewProductForm = (e) => {
    setIsAddFormVisible(true);
  }

  const handleHideNewProductForm = (e) => {
    setIsAddFormVisible(false);
  }

  return (
    <div id="app">
      <Header />
      <Products
        products={products}
        onDisplayNewProductForm={handleDisplayNewProductForm}
        isAddFormVisible={isAddFormVisible}
        onHideNewProductForm={handleHideNewProductForm}
        onUpdateProduct={handleUpdateProduct}
        onAddNewProduct={handleAddNewProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}

root.render(<App />);