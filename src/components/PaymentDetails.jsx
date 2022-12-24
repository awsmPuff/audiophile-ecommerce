import React from "react";
import styled from "styled-components";
import cashOnDeliveryIcon from "../assets/checkout/icon-cash-on-delivery.svg";

export default function PaymentDetails(props) {
  const tabletSize = window.matchMedia("(min-width: 760px)").matches;

  return (
    <Container className="flex-c">
      <h3 className="sub-title">payment details</h3>
      <article className={`unit ${tabletSize ? `flex-r` : `flex-c`}`}>
        <label>Payment Method</label>
        <div className="pay-flex flex-c">
          <div className="online flex-r" style={{ border: `${props.border1}` }}>
            <input
              type="radio"
              name="payment"
              id="e-money"
              value={props.value}
              onClick={props.onClick1}
            />
            <span>e-Money</span>
            <div
              className="ball-1 absolute"
              style={{ display: `${props.displayBall1}` }}
            ></div>
          </div>
          <div
            className="offline flex-r"
            style={{ border: `${props.border2}` }}
          >
            <input
              type="radio"
              name="payment"
              id="cash"
              value={props.value}
              onClick={props.onClick2}
            />
            <span>Cash on Delivery</span>
            <div
              className="ball-2 absolute"
              style={{ display: `${props.displayBall2}` }}
            ></div>
          </div>
        </div>
      </article>

      <article
        className="expand flex-c"
        style={{ display: `${props.displayBall1}` }}
      >
        <div className="unit flex-c">
          <div className="label-line flex-r">
            <label>e-Money Number</label>
            <p className="notes">{props.eNumNote}</p>
          </div>
          <input
            type="text"
            value={props.eNumber}
            onChange={props.changeENum}
            style={{ border: `${props.eNumBorder}` }}
          />
        </div>
        <div className="unit flex-c">
          <div className="label-line flex-r">
            <label>e-Money PIN</label>
            <p className="notes">{props.ePINNote}</p>
          </div>
          <input
            type="text"
            value={props.ePIN}
            onChange={props.changeEPIN}
            style={{ border: `${props.ePINBorder}` }}
          />
        </div>
      </article>

      <article
        className="cash-expand flex-r"
        style={{ display: `${props.displayBall2}` }}
      >
        <img src={cashOnDeliveryIcon} alt="cash on delivery" />
        <p>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </article>
    </Container>
  );
}

const Container = styled.div`
  gap: 1.5rem;
  .unit {
    gap: 0.5rem;
  }
  .pay-flex {
    gap: 1rem;
  }
  .online,
  .offline {
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
    height: 3.3rem;
    border: solid 1px #cfcfcf;
    position: relative;
    input[type="radio"] {
      width: 2rem;
      height: 2rem;
      opacity: 0;
      z-index: 5;
    }
    span {
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: -0.01rem;
    }
    span::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      margin: auto;
      left: 1.15rem;
      width: 1.4rem;
      height: 1.4rem;
      border: solid 1px #cfcfcf;
      border-radius: 50%;
      cursor: pointer;
    }
    .ball-1,
    .ball-2 {
      content: "";
      top: 0;
      bottom: 0;
      margin: auto;
      left: 1.5rem;
      width: 0.8rem;
      height: 0.8rem;
      background-color: var(--dark-orange);
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .expand {
    gap: 0.5rem;
  }
  .cash-expand {
    gap: 0.6rem;
    align-items: flex-start;
    p {
      font-size: 0.95rem;
      opacity: 0.5;
      line-height: 1.6rem;
    }
  }

  @media (min-width: 760px) {
    .unit {
      justify-content: space-between;
      .pay-flex {
        width: 50%;
      }
    }
    .cash-expand {
      gap: 1rem;
    }
  }
`;
