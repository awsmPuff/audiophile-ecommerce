import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const tabletSize = window.matchMedia("(min-width: 760px)").matches;

  return (
    <Container className="flex-c">
      <hr className="absolute" />
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul className={`${tabletSize ? `flex-r` : `flex-c`}`}>
        <Link to="/">
          <li className="sub-title">Home</li>
        </Link>
        <Link to="/headphones">
          <li className="sub-title">Headphones</li>
        </Link>
        <Link to="/speakers">
          <li className="sub-title">Speakers</li>
        </Link>
        <Link to="/earphones">
          <li className="sub-title">Earphones</li>
        </Link>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="copyright">Copyright 2021. All Rights Reserved</p>
      <div className="icons flex-r">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 3rem 6%;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3rem;
  position: relative;
  hr {
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 5px;
    border: none;
    background-color: var(--dark-orange);
    width: 30%;
    z-index: 5;
  }
  a {
    width: 50%;
    .logo {
      width: 100%;
    }
  }
  ul {
    gap: 1rem;
    align-items: center;
    text-align: center;
    width: 100%;
    li.sub-title {
      letter-spacing: 0.12rem;
      &:hover {
        color: var(--dark-orange);
      }
    }
  }
  p {
    opacity: 0.5;
  }
  .copyright {
    font-weight: 700;
  }
  .icons {
    gap: 1rem;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        color: var(--dark-orange);
      }
    }
  }

  @media (min-width: 760px) {
    padding: 5rem 6% 4rem;
    align-items: flex-start;
    text-align: left;
    hr {
      left: 6%;
      width: 20%;
      right: 74%;
    }
    a {
      width: 30%;
    }
    ul {
      gap: 2rem;
      justify-content: flex-start;
      text-align: left;
      width: 80%;
      a,
      li {
        width: max-content;
      }
    }
    .icons {
      position: absolute;
      right: 6%;
      bottom: 4rem;
    }
  }

  @media (min-width: 1400px) {
    padding: 5rem 10% 4rem;
    hr {
      left: 10%;
      width: 10%;
      right: 80%;
    }
    a {
      width: 15%;
    }
    ul {
      position: absolute;
      right: 10%;
      top: 5rem;
      width: max-content;
    }
    p {
      width: 50%;
    }
    .icons {
      right: 10%;
    }
  }
`;
