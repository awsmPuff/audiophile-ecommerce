import React from "react";
import styled from "styled-components";

export default function SummaryItem(props) {
  const str = props.name;
  return (
    <Container className="flex-r">
      <img src={props.img} alt={props.name} />
      <div className="whole flex-r">
        <section className="flex-c">
          <p>{str.length >= 20 ? str.substring(0, 17) + "..." : str}</p>
          <span>$ {props.price}</span>
        </section>
        <div className="num">x{props.num}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  gap: 1rem;
  width: 100%;
  height: 3.5rem;
  gap: 1rem;
  align-items: center;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 0.6rem;
  }
  .whole {
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    section {
      gap: 0.5rem;
      font-weight: 700;
      span {
        opacity: 0.5;
        font-size: 0.95rem;
      }
    }
    .num {
      opacity: 0.5;
      font-weight: 700;
    }
  }
`;
