import React, { useContext } from "react";
import "./Product.css";
import { useLocation } from "react-router-dom";
import { usePostRequest } from "../../hooks/useRequest";
import { LangContext } from "../LangProvider/LangProvider";
import dataJSON from "../../data.json";
import { normalizedData } from "../../utils";
import { date } from "@telegram-apps/sdk-react";

export const Product = () => {
  const { state } = useLocation();

  const { lang } = useContext(LangContext);

  const dataFetch = {
    sign: state.product.id,
    language: lang === "ru" ? "original" : "translated",
    period: "today",
  };

  const { data, error } = usePostRequest(JSON.stringify(dataFetch));

  if (!data) return <h1>Loading...</h1>;

  const item = dataJSON.horoscopes[lang !== "ru" ? "en" : lang][data.sign];

  const horoscope = {
    title: item.title,
    date: item.date,
    horoscope: data.horoscope,
    src: `/${data.sign}.png`,
  };

  return (
    <div className="product">
      <h1 className="product__title">{horoscope.title}</h1>
      <p className="product__date">{horoscope.date}</p>
      <figure className="product__img">
        <img src={horoscope.src} alt="" />
      </figure>
      <p className="product__text">{horoscope.horoscope}</p>
    </div>
  );
};
