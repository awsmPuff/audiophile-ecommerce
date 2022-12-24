import React from "react";
import styled from "styled-components";
import heroImg from "../assets/home/mobile/image-header.jpg";
import heroImgTablet from "../assets/home/tablet/image-header.jpg";
import heroImgDesktop from "../assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Container className="flex-c">
      <img
        className="absolute"
        src={
          desktopSize ? heroImgDesktop : tabletSize ? heroImgTablet : heroImg
        }
        alt="hero"
      />
      <div className="des flex-c">
        <span className="overline">New product</span>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/productdetails/xx99-mark-two-headphones">
          <button className="btn o-btn">See product</button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-bottom: 10rem;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    min-height: 43rem;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .des {
    gap: 1rem;
    color: white;
    margin-top: 10rem;
    align-items: center;
    text-align: center;
    span.overline {
      opacity: 0.5;
    }
    p {
      opacity: 0.75;
      margin: 1rem 0;
    }
  }

  @media (min-width: 1400px) {
    padding: 0 10%;
    .des {
      margin-top: 7rem;
      width: 100%;
      gap: 1.5rem;
      align-items: flex-start;
      text-align: left;
      h1{
        font-size: 3.1rem;
      }
      h1,p {
        width: 35%;
      }
    }
  }
`;
