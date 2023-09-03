import React from "react";

const ProductBody = ({ productTitle, price, quantityInStock }) => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">{productTitle}</h3>
          <p className="text-lg price font-medium">${price}</p>
        </div>
        <p
          className={`${
            !quantityInStock && "text-red-700"
          } mb-8 text-[#5D534F]`}
        >
          <span className="font-medium">{quantityInStock}</span> left in stock
        </p>
      </div>
    </>
  );
};

export default ProductBody;
