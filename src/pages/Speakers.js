import React from "react";
import data from "../data.json";
import Layout from "./Layout";
import SinglePreview from "../components/SinglePreview";

export default function Speakers() {
  const speakerData = data.filter((d) => d.category === "speakers");
  const newProduct = speakerData.filter((d) => d.new === true);
  const otherProduct = speakerData.filter((d) => d.new === false);

  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <div className="Speakers">
      <Layout>
        <div className="headings flex-r">
          <h2>Speakers</h2>
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
