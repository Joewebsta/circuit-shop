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

const Products = ({ products, onDisplayNewProductForm, isAddFormVisible }) => {
  return (
    <main>
      <ProductListing products={products} />
      <AddForm onDisplayNewProductForm={onDisplayNewProductForm} isAddFormVisible={isAddFormVisible} />
    </main>
  )
}

const ProductListing = ({ products }) => {
  const productList = () => {
    return products.map((product) => {
      const { _id: id, title, quantity, price } = product;
      return <Product key={id} productName={title} price={price} quantityInStock={quantity} />
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

const Product = ({ productName, price, quantityInStock }) => {
  return (
    <li className="product">
      <div className="product-details">
        <h3>{productName}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantityInStock} left in stock</p>
        <Actions />
        <button className="delete-button"><span>X</span></button>
      </div>
    </li>
  )
}

const Actions = () => {
  return (
    <div className="actions product-actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="edit">Edit</button>
    </div>
  )
}

const AddForm = ({ onDisplayNewProductForm, isAddFormVisible }) => {
  return (
    <div className={`add-form ${isAddFormVisible && "visible"}`}>
      <p><button className="add-product-button" onClick={onDisplayNewProductForm}>Add A Product</button></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
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
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
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

  const handleDisplayNewProductForm = (e) => {
    setIsAddFormVisible(!isAddFormVisible);
  }

  return (
    <div id="app">
      <Header />
      <Products
        products={products}
        onDisplayNewProductForm={handleDisplayNewProductForm}
        isAddFormVisible={isAddFormVisible}
      />
    </div>
  );
}

root.render(<App />);