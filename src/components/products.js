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
const slider = document.querySelector('.products');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

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
