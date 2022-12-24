import React from "react";
import SinglePreview from "../components/SinglePreview";
import data from "../data.json";
import Layout from "./Layout";

export default function Headphones() {
  const headphoneData = data.filter((d) => d.category === "headphones");
  const newProduct = headphoneData.filter((d) => d.new === true);
  const otherProduct = headphoneData.filter((d) => d.new === false);

  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <div className="Headphones">
      <Layout>
        <div className="headings flex-r">
          <h2>Headphones</h2>
        </div>
        {newProduct.map((data) => (
          <SinglePreview
            key={data.id}
            img={
              desktopSize
                ? data.categoryImage.desktop
                : tabletSize
                ? data.categoryImage.tablet
                : data.categoryImage.mobile
            }
            name={data.name}
            slug={data.slug}
            des={data.description}
            new="flex"
          />
        ))}
        {otherProduct.map((data) => (
          <SinglePreview
            key={data.id}
            id={data.id}
            img={
              desktopSize
                ? data.categoryImage.desktop
                : tabletSize
                ? data.categoryImage.tablet
                : data.categoryImage.mobile
            }
            name={data.name}
            slug={data.slug}
            des={data.description}
            new="none"
          />
        ))}
      </Layout>
    </div>
  );
}


