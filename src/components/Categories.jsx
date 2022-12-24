import React from "react";
import styled from "styled-components";
import Category from "./Category";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

export default function Categories(props) {
  const tabletSize = window.matchMedia("(min-width: 760px)").matches;

  return (
    <Container className={`Categories ${tabletSize ? `flex-r` : `flex-c`}`}>
      <Category
        thumbnail={headphonesThumbnail}
        name="headphones"
        link="/headphones"
        onClick={props.handleClick}
      />
      <Category
        thumbnail={speakersThumbnail}
        name="speakers"
        link="/speakers"
        onClick={props.handleClick}
      />
      <Category
        thumbnail={earphonesThumbnail}
        name="earphones"
        link="/earphones"
        onClick={props.handleClick}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  padding: 5rem 6%;
  gap: 5rem;

  @media (min-width: 760px) {
    padding: 2rem 6%;
    margin: 3rem 0;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (min-width: 1400px) {
    padding: 3rem 10%;
    gap: 2rem;
  }
`;
