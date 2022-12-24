import React from "react";
import styled from "styled-components";
import person from "../assets/shared/mobile/image-best-gear.jpg";
import personTablet from "../assets/shared/tablet/image-best-gear.jpg";
import personDesktop from "../assets/shared/desktop/image-best-gear.jpg";

export default function Article() {
  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Container className={`${desktopSize ? `flex-r` : `flex-c`}`}>
      <img
        src={desktopSize ? personDesktop : tabletSize ? personTablet : person}
        alt="best-gear"
      />
      <div className="article flex-c">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 3rem 6% 6rem;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    border-radius: 0.6rem;
    width: 100%;
  }
  .article {
    gap: 2.5rem;
    align-items: center;
  }
  h2 {
    width: 90%;
    span {
      color: var(--dark-orange);
    }
  }
  p {
    width: 90%;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 760px) {
    h2 {
      width: 75%;
    }
    p {
      width: 80%;
    }
  }

  @media (min-width: 1400px) {
    padding: 2rem 10% 8rem;
    img {
      order: 2;
      width: 33rem;
      height: 34rem;
    }
    .article{
      align-items: flex-start;
      text-align: left;
      h2{
        font-size: 2.2rem;
        width: 65%;
      }
      p{
        width: 70%;
      }
    }
  }
`;
