import React from 'react';
import CartItemListing from './CartItemListing';

const Cart = ({ items, onCheckoutCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 ? <p>"Your cart is empty"</p> : <CartItemListing items={items} />}
      <button className="checkout" onClick={onCheckoutCart} disabled={!items.length}>Checkout</button>
    </div>
  );
}

export default Cart;