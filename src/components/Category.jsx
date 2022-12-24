import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import rightArrow from "../assets/shared/desktop/icon-arrow-right.svg";

export default function Category(props) {
  return (
    <Container className="flex-c">
      <img className="absolute" src={props.thumbnail} alt={props.name} />
      <h6>{props.name}</h6>
      <Link to={props.link}>
        <button className="btn" onClick={props.onClick}>
          shop
          <img className="arrow" src={rightArrow} alt="" />
        </button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border-radius: 0.6rem;
  background-color: var(--gray);
  height: 12rem;
  gap: 1.3rem;
  align-items: center;
  img {
    width: 10rem;
    top: -3rem;
    left: 0;
    right: 0;
    transform: scale(1.1);
    margin: auto;
  }
  .arrow {
    width: 0.5rem;
  }
  h6 {
    margin-top: 6rem;
  }
  button {
    gap: 0.5rem;
    width: 4rem;
    height: 2rem;
    background: none;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: var(--dark-orange);
    }
  }

  @media (min-width: 760px) {
    margin-top: 5rem;
    width: 100%;
    z-index: 10;
    img {
      width: 8.5rem;
      top: -2.5rem;
    }
  }
  @media (min-width: 1400px) {
    height: 13.5rem;
    img {
      width: 10rem;
      top: -3rem;
    }
  }
`;
