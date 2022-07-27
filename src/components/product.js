import React from "react";
import dots from '../assets/dots.png'

const Product = ({source, price, brand}) => {
  return (
    <div className="product">
      <img src={source} alt={source} width={'90%'} />
      <p className="brand-line">{brand}</p>
      <div className="bottom d-flex justify-content-between">
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default Product;
