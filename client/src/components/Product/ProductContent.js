import React from "react";

const ProductBody = ({ productTitle, price, quantityInStock }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">{productTitle}</h3>
        <p className="text-lg price font-medium">${price}</p>
      </div>
      <p
        className={`${!quantityInStock && "text-red-700"} mb-8 text-[#5D534F]`}
      >
        {quantityInStock} left in stock
      </p>
    </>
  );
};

export default ProductBody;
