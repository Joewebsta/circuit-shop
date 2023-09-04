import React from "react";

const CartItem = ({ item }) => {
  return (
    <tr className="border-b border-[#BFB9B2]">
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>${item.price.toLocaleString()}</td>
    </tr>
  );
};

export default CartItem;
