import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="bg-black absolute inset-0 bg-opacity-30">{children}</div>
  );
};

export default Overlay;
