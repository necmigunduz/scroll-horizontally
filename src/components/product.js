import React from "react";
import Circle from "./circle";

const Product = ({ source, price, brand }) => {
  return (
    <div className="product">
      <img src={source} alt={source} width={"90%"} />
      <p className="brand-line mt-2">{brand}</p>
      <div className="bottom d-flex justify-content-between">
        <p className="price-line">{price}</p>
        <div className="circles d-flex p-1">
          <Circle /><Circle /><Circle /><Circle />
        </div>
      </div>
    </div>
  );
};

export default Product;
