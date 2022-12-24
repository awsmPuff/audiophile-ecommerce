import React from "react";
import styled from "styled-components";
import circle from "../assets/home/desktop/pattern-circles.svg";
import speaker1 from "../assets/home/mobile/image-speaker-zx9.png";
import speaker2 from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphone from "../assets/home/mobile/image-earphones-yx1.jpg";
import speaker1Tablet from "../assets/home/tablet/image-speaker-zx9.png";
import speaker2Tablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import earphoneTablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import speaker1Desktop from "../assets/home/desktop/image-speaker-zx9.png";
import speaker2Desktop from "../assets/home/desktop/image-speaker-zx7.jpg";
import earphoneDesktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

export default function Showcases() {
  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Container className="flex-c">
      <div className={`first ${desktopSize ? `flex-r` : `flex-c`}`}>
        <img className="circle absolute" src={circle} alt="" />
        <img
          className="speaker1"
          src={
            desktopSize
              ? speaker1Desktop
              : tabletSize
              ? speaker1Tablet
              : speaker1
          }
          alt="speaker1"
        />
        <div className="zx9 flex-c">
          <h1>ZX9 speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/productdetails/zx9-speaker">
            <button className="btn w-btn">See product</button>
          </Link>
        </div>
      </div>

      <div className="second flex-c">
        <img
          className="speaker2 absolute"
          src={
            desktopSize
              ? speaker2Desktop
              : tabletSize
              ? speaker2Tablet
              : speaker2
          }
          alt="speaker2"
        />
        <h4>ZX7 speaker</h4>
        <Link to="/productdetails/zx7-speaker">
          <button className="btn b-btn">See product</button>
        </Link>
      </div>

      <div className={`third ${tabletSize ? `flex-r` : `flex-c`}`}>
        <img
          src={
            desktopSize
              ? earphoneDesktop
              : tabletSize
              ? earphoneTablet
              : earphone
          }
          alt="earphone"
        />
        <div className="flex-c">
          <h4>YX1 earphones</h4>
          <Link to="/productdetails/yx1-earphones">
            <button className="btn b-btn">See product</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  gap: 2rem;
  padding: 2rem 6%;
  div {
    border-radius: 0.6rem;
  }
  .first {
    background-color: var(--dark-orange);
    padding: 3rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
    position: relative;
    color: white;
    .zx9 {
      gap: 2rem;
      align-items: center;
    }
    .speaker1 {
      width: 50%;
      z-index: 3;
    }
    .circle {
      width: 130%;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 0;
    }
    p {
      opacity: 0.75;
    }
    a {
      z-index: 5;
    }
  }
  .second {
    position: relative;
    padding: 7rem 2rem;
    gap: 2rem;
    img {
      border-radius: 0.6rem;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }
    a,
    h4 {
      z-index: 3;
    }
  }
  .third {
    gap: 2rem;
    img {
      width: 100%;
      border-radius: 0.6rem;
    }
    div {
      background-color: var(--gray);
      padding: 3rem 2rem;
      gap: 2rem;
    }
  }

  @media (min-width: 760px) {
    padding-bottom: 5rem;
    .first {
      padding: 4.5rem 2rem;
      .speaker1 {
        width: 40%;
      }
      .circle {
        top: -35%;
        left: -14%;
      }
      h1 {
        margin-top: 3rem;
      }
      p {
        width: 60%;
      }
    }
    .second {
      padding: 7rem 4rem;
      img {
        height: 90%;
      }
    }
    .third {
      gap: 1rem;
      img {
        width: 50%;
      }
      div {
        width: 50%;
        padding: 3rem;
        justify-content: center;
      }
    }
  }

  @media (min-width: 1400px) {
    padding: 2rem 10% 6rem;
    .first {
      gap: 8rem;
      overflow: hidden;
      .speaker1 {
        width: 45%;
        margin-bottom: -5rem;
        margin-left: 5rem;
      }
      .zx9 {
        align-items: flex-start;
        text-align: left;
        h1,p {
          width: 75%;
        }
      }
      .circle {
        top: -50%;
        left: -55%;
      }
    }
  }
`;
