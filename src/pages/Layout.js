import React from "react";
import Article from "../components/Article";
import Categories from "../components/Categories";

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Categories />
      <Article />
    </div>
  );
}
