import React from "react";
import styled from "styled-components";
import confirmIcon from "../assets/checkout/icon-order-confirmation.svg";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

export default function Success(props) {
  const dispatch = useDispatch();
  const removeAll = () => {
    return {
      type: "DELETE_ALL",
    };
  };

  const tabletSize = window.matchMedia("(min-width: 760px)").matches;

  return (
    <Container className="absolute flex-c">
      <img src={confirmIcon} alt="confirm" />
      <h3>Thank you for your order</h3>
      <p>You will receive an email confirmation shortly.</p>
      <section className={`bill-sec ${tabletSize ? `flex-r` : `flex-c`}`}>
        <div className="bought flex-c">
          <CartItem
            img={props.img}
            name={props.name}
            price={props.price}
            num={props.num}
          />
          {props.rest > 0 ? <hr /> : ""}
          {props.rest > 0 ? (
            <p className="rest">and {props.rest} other item(s)</p>
          ) : (
            ""
          )}
        </div>
        <div className="grand flex-c">
          <p className="head">Grand Total</p>
          <p>$ {props.total}</p>
        </div>
      </section>
      <Link to="/">
        <button className="btn o-btn" onClick={() => dispatch(removeAll())}>
          Back to home
        </button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  z-index: 10;
  top: 16rem;
  background-color: white;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 0.6rem;
  padding: 2rem;
  box-shadow: 0 0 0 20rem rgba(0, 0, 0, 0.4);
  width: 88%;
  align-items: flex-start;
  gap: 1.5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  h3 {
    color: black;
  }
  p {
    font-weight: 500;
  }
  a,
  button {
    width: 100%;
  }
  section {
    width: 100%;
    border-radius: 0.6rem;
    background-color: var(--gray);
    .bought {
      padding: 2rem;
      gap: 0.6rem;
      hr {
        height: 1px;
        border: none;
        background-color: rgba(0, 0, 0, 0.08);
      }
      .rest {
        text-align: center;
        font-weight: 700;
        font-size: 0.85rem;
        color: black;
        opacity: 0.5;
      }
    }
    .grand {
      border-radius: 0 0 0.6rem 0.6rem;
      padding: 1.5rem 2rem;
      gap: 0.3rem;
      background-color: black;
      color: white;
      .head {
        text-transform: uppercase;
        font-weight: 500;
        opacity: 0.5;
      }
      p {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 760px) {
    width: 75%;
    padding: 3rem;
    h3 {
      width: 50%;
    }
    .bill-sec {
      justify-content: space-between;
      .bought {
        width: 55%;
        padding: 1.7rem 1.8rem;
        .CartItem {
          gap: 0.5rem;
        }
      }
      .grand {
        width: 45%;
        border-radius: 0 0.6rem 0.6rem 0;
        justify-content: center;
      }
    }
  }

  @media (min-width: 1400px) {
    width: 40%;
    box-shadow: 0 0 0 100rem rgba(0, 0, 0, 0.4);
  }
`;
