import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
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
  const ref = useRef()
  const { events } = useDraggable(ref)
  return (
    <>
      <div 
        className="products d-flex"
        {...events}
        ref={ref}
      >
        {products.map((product) => {
          return (
            <Product
              key={products.indexOf(product)}
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
