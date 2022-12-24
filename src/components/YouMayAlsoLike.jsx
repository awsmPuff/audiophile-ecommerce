import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function YouMayAlsoLike(props) {
  return (
    <Container className="flex-c">
        <img src={props.img} alt={props.name} />
      <h5>{props.name}</h5>
      <Link to={props.link}>
        <button className="btn o-btn">see product</button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 2rem;
  padding: 2rem 0;
   img {
      width: 100%;
      border-radius: 0.6rem;
  }
`;
