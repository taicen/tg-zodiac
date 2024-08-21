import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const navList = [
  { title: "Products", path: "/" },
  { title: "Contacts", path: "/contacts" },
];

export const Footer = () => {
  return (
    <div className={"footer"}>
      {navList.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
