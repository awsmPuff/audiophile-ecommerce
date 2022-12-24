import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SinglePreview(props) {
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Container className={`SinglePreview ${desktopSize ? `flex-r` : `flex-c`}`}>
      <img src={props.img} alt={props.name} />
      <div className="pre-texts flex-c">
        <span className="overline" style={{ display: `${props.new}` }}>
          new product
        </span>
        <h2>{props.name}</h2>
        <p>{props.des}</p>
        <Link to={`/productdetails/${props.slug}`}>
          <button className="btn o-btn">see product</button>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 4rem 6%;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    border-radius: 0.6rem;
    width: 100%;
  }
  .pre-texts {
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .overline {
    color: var(--dark-orange);
  }
  p {
    opacity: 0.5;
    width: 95%;
  }

  @media (min-width: 760px) {
    h2 {
      width: 65%;
    }
    p {
      width: 90%;
    }
  }

  @media (min-width: 1400px) {
    width: 100%;
    gap: 8rem;
    padding: 4rem 10%;
    img{
      width: 30rem;
      height: 30rem;
    }
    .pre-texts {
      width: 50%;
      gap: 2rem;
      align-items: flex-start;
      text-align: left;
      p {
        width: 80%;
      }
    }
  }
`;
