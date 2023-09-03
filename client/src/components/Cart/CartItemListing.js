import React from "react";
import CartItem from "./CartItem";

const CartItemListing = ({ items }) => {
  const total = () =>
    items.reduce((sum, current) => {
      return sum + current.price * current.quantity;
    }, 0);

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
        {items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="total">
            Total: ${total()}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartItemListing;
