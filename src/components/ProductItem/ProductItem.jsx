import React from "react";
import "./ProductItem.css";
export const ProductItem = ({ title, date, src }) => {
  return (
    <div className={"product-item"}>
      <div className="product-item__image">
        <img src={src ?? "https://picsum.photos/200/300"} alt="product" />
      </div>
      <div className="product-item__title">{title}</div>
      <div className="product-item__subtitle">{date}</div>
    </div>
  );
};
