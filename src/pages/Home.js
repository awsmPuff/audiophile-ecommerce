import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Showcases from "../components/Showcases";
import Article from "../components/Article";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Showcases />
      <Article />
    </div>
  );
}
