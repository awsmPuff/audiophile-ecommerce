import React from "react";
import styled from "styled-components";

export default function CartItem(props) {
  const str = props.name;
 
  return (
    <Container className="CartItem flex-r">
      <img src={props.img} alt={props.name} />
      <div className="title-price flex-c">
        <p className="tit">
          {str.length >= 20 ? str.substring(0, 17) + "..." : str}
        </p>
        <p>$ {props.price}</p>
      </div>
      <span className="absolute">x{props.num}</span>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.6rem;
  }
  .title-price {
    gap: 0.3rem;
    font-weight: 700;
    font-size: 0.95rem;
    color: rgba(0, 0, 0, 0.5);
    .tit {
      font-size: 1rem;
      color: black;
    }
  }
  span {
    top: 1rem;
    right: 0;
    font-weight: 700;
    letter-spacing: 0.05rem;
  }
`;
