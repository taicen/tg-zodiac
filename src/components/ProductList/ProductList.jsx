import React, { useContext } from "react";
import "./ProductList.css";
import { ProductItem } from "../ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { usePostRequest } from "../../hooks/useRequest";
import { LangContext } from "../LangProvider/LangProvider";
import dataJSON from "../../data.json";
import { normalizedData } from "../../utils";

export const ProductList = () => {
  const { lang } = useContext(LangContext);

  const dataFetch = {
    language: lang === "ru" ? "original" : "translated",
    period: "today",
  };

  const { data, error } = usePostRequest(JSON.stringify(dataFetch));

  if (!data) return <h1>Loading...</h1>;

  const { horoscope } = data;

  const horoscopes = normalizedData(horoscope, dataJSON, lang);

  return (
    <div className="product-list">
      {horoscopes.map((product, index) => (
        <Link key={index} to={`/product/${product.id}`} state={{ product: product }}>
          <ProductItem
            key={index}
            title={product.title}
            description={product.description}
            date={product.date}
            src={product.src}
          />
        </Link>
      ))}
    </div>
  );
};
