import React from 'react';
import CartItemListing from './CartItemListing';

const Cart = ({ items, onCheckoutCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length !== 0 ? <CartItemListing items={items} /> : <p>"Your cart is empty"</p>}
      <button className="checkout" onClick={onCheckoutCart} disabled={!items.length}>Checkout</button>
    </div>
  );
}

export default Cart;