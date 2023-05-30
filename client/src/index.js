import React from 'react';
import ReactDOM from 'react-dom/client';
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

const Cart = () => {
  return (
    <main>
      <ProductListing />
      <AddForm />
    </main>
  )
}

const ProductListing = () => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul class="product-details">
        <Product productName="Amazon Kindle E-reader" price="$79.99" quantityInStock={5} />
        <Product productName="Amazon Kindle E-reader" price="$79.99" quantityInStock={5} />
        <Product productName="Amazon Kindle E-reader" price="$79.99" quantityInStock={5} />
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
    <div class="actions product-actions">
      <button class="add-to-cart">Add to Cart</button>
      <button class="edit">Edit</button>
    </div>
  )
}

const AddForm = () => {
  return (
    <div className="add-form">
      <p><button className="add-product-button">Add A Product</button></p>
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
  return (
    <div id="app">
      <Header />
      <Cart />
    </div>
  );
}

root.render(<App />);