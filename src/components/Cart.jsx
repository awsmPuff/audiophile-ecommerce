import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const [display, setDisplay] = useState(true);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const addedItems = state.cartReducer.cart;
  console.log("store: ", addedItems);

  var total = 0;
  addedItems.map(
    (item) => (total += Number(item.price) * Number(item.numOfItem))
  );
  var quantity = 0;
  addedItems.map((item) => (quantity += Number(item.numOfItem)));

  // Remove repeated items and accumulate quantity of them
  const group = {};
  addedItems.forEach((e) => {
    const o = (group[e.name] = group[e.name] || { ...e, numOfItem: 0 });
    o.numOfItem += e.numOfItem;
  });
  const res = Object.values(group);

  const removeAll = () => {
    return {
      type: "DELETE_ALL",
    };
  };

  const handleDisplay = () => {
    setDisplay(false);
  };

  return (
    <>
      {display ? (
        <Container className="absolute flex-c">
          <div className="f-line flex-r">
            <h6>
              CART(<span>{quantity}</span>)
            </h6>
            <p className="remove" onClick={() => dispatch(removeAll())}>
              Remove all
            </p>
          </div>
          <div className="items flex-c">
            {res.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price.toLocaleString()}
                img={item.image}
                num={item.numOfItem}
              />
            ))}
          </div>
          <div className="summary flex-r">
            <p>TOTAL</p>
            <h6>
              $ <span>{total.toLocaleString()}</span>
            </h6>
          </div>

          <Link to={total === 0 ? "#" : "/checkout"}>
            <button className="btn o-btn" onClick={handleDisplay}>
              checkout
            </button>
          </Link>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}

const Container = styled.div`
  padding: 2rem;
  width: 88%;
  z-index: 5;
  top: 8rem;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border-radius: 0.6rem;
  gap: 1.6rem;
  box-shadow: 0 0 0 50rem rgba(0, 0, 0, 0.4);
  .f-line,
  .summary {
    width: 100%;
    justify-content: space-between;
  }
  .f-line {
    color: black;

    p {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .items {
    gap: 1.5rem;
  }
  button {
    width: 100%;
  }
  .remove {
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--dark-orange);
    }
  }
  .summary {
    p {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
    }
    h6 {
      color: black;
    }
  }

  @media (min-width: 760px) {
    width: 44%;
    left: 44%;
  }
  @media (min-width: 1400px) {
    left: 55%;
    width: 25%;
    box-shadow: 0 0 0 100rem rgba(0, 0, 0, 0.4);
  }
`;
