import React from "react";
import Product from "./product";
import rightI from "../assets/right-I.png";
import rightII from "../assets/right-II.png";
import rightIII from "../assets/right-III.png";

const products = [
  {
    source: rightI,
    price: "€33.95",
    brand: "Signature Hoodie",
  },
  {
    source: rightII,
    price: "€33.95",
    brand: "Organic Skinny High Waist Jeans",
  },
  {
    source: rightIII,
    price: "€33.95",
    brand: "Organic Skinny High Waist Jeans",
  },
];

const Products = () => {
  return (
    <>
      <div className="products d-flex">
        {products.map((product) => {
          return (
            <Product
              source={product.source}
              price={product.price}
              brand={product.brand}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
