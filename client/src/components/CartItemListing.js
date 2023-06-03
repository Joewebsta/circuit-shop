import React from 'react';
import CartItem from './CartItem';

const CartItemListing = ({ items }) => {
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => <CartItem key={item._id} item={item} />)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total" >Total: ${items.reduce((sum, current) => sum + current.price, 0)}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CartItemListing;