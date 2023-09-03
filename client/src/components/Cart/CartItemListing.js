import React from "react";
import CartItem from "./CartItem";

const CartItemListing = ({ items }) => {
  const total = () =>
    items.reduce((sum, current) => {
      return sum + current.price * current.quantity;
    }, 0);

  return (
    <table className="w-[100%] mb-6" cellpadding="10">
      <thead>
        <tr>
          <th scope="col" className="text-left w-[63%]">
            Product
          </th>
          <th scope="col" className="text-left">
            Qty
          </th>
          <th scope="col" className="text-left">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2" className="font-medium">
            Total:
          </td>
          <td className="font-medium">${total()}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartItemListing;
