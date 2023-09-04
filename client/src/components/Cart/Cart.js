import React from "react";
import CartItemListing from "./CartItemListing";
import { IconShoppingCart } from "@tabler/icons-react";

const Cart = ({ items, onCheckoutCart }) => {
  return (
    <div className="flex-1 rounded">
      <div className="mb-5 flex items-center gap-2">
        <IconShoppingCart size="26px" stroke="2.5" />
        <h2 className="text-3xl font-bold">Cart</h2>
      </div>
      <div className="bg-[#ECEAE8] pt-[14px] px-6 pb-6 min-h-[229px]">
        {items.length == 0 ? (
          <p className="text-center font-medium mt-[10px]">
            Your cart is empty
          </p>
        ) : (
          <div>
            <CartItemListing items={items} />
            <button
              className="py-[5px] px-3 w-full bg-[#030303] text-white font-medium rounded"
              onClick={onCheckoutCart}
              disabled={!items.length}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
