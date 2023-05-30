import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Actions = () => {
  return React.createElement("div", {className: "actions product-actions"}, 
    React.createElement("button", {className: "add-to-cart"}, "Add to Cart"),
    React.createElement("button", {className: "edit"}, "Edit")
 );	
}

const Product = ({productName, price, quantityInStock}) => {
  return React.createElement("li", {className: "product"},
    React.createElement("div", {className: "product-details"}, 
	  React.createElement("h3", null, productName),
	  React.createElement("p", {className: "price"}, price),
	  React.createElement("p", {className: "quantity"}, `${quantityInStock} left in stock`),
	  Actions(),
	  React.createElement("button", {className: "delete-button"}, "Delete")
  ));
}

const ProductListing = () => {
  return React.createElement("div", {className: "product-listing"},
  	React.createElement("h2", null, "Products"),
	React.createElement("ul", {className: "product-list"}, 
	 React.createElement(Product, {productName: "Amazon Kindle E-reader", price: "$79.99", quantityInStock: 5}),
	 React.createElement(Product, {productName: "Apple 10.5-Inch iPad Pro", price: "$649.99", quantityInStock: 2}),
	 React.createElement(Product, {productName: "Yamaha Portable Keyboard", price: "$155.99", quantityInStock: 0}),
  ));
}

const Cart = () => {
  return(
    <main>
	  <ProductListing />
	</main>
  )
}

const Header = () => {
  return(
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


const App = () => {
  //return React.createElement("div", { id: "app" }, Header(), Cart());
  return (
    <div>
	  <Header />
	  <Cart />
	</div>
  );
}

root.render(
  <App />
);