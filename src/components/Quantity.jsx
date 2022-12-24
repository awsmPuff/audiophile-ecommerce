import React from "react";
import styled from "styled-components";

export default function Quantity(props) {

  return (
    <Container className="quantity flex-r">
      <span className="minus" onClick={props.minus}>
        -
      </span>
      <span>{props.num}</span>
      <span className="add" onClick={props.add}>
        +
      </span>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 0.9rem;
  gap: 1.5rem;
  width: 8rem;
  height: 100%;
  background-color: var(--gray);
  .add,
  .minus {
    opacity: 0.25;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
        color: var(--dark-orange);
    }
  }
`;
