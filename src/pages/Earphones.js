import React from "react";
import data from "../data.json";
import Layout from "./Layout";
import SinglePreview from "../components/SinglePreview";

export default function Earphones() {
  const earphoneData = data.filter((d) => d.category === "earphones");
  const newProduct = earphoneData.filter((d) => d.new === true);
  const otherProduct = earphoneData.filter((d) => d.new === false);

  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <div>
      <Layout>
        <div className="headings flex-r">
          <h2>Earphones</h2>
        </div>
        {newProduct.map((data) => (
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
            new="flex"
          />
        ))}
        {otherProduct.map((data) => (
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
            new="none"
          />
        ))}
      </Layout>
    </div>
  );
}
