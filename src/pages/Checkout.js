import React, { useState } from "react";
import styled from "styled-components";
import SummaryItem from "../components/SummaryItem";
import { useSelector } from "react-redux";
import PaymentDetails from "../components/PaymentDetails";
import Success from "../components/Success";
import Back from "../components/Back";

export default function Checkout() {
  const state = useSelector((state) => state);
  const addedItems = state.cartReducer.cart;
  var total = 0;
  addedItems.map(
    (item) => (total += Number(item.price) * Number(item.numOfItem))
  );
  // Remove repeated items and accumulate quantity of them
  const group = {};
  addedItems.forEach((e) => {
    const o = (group[e.name] = group[e.name] || { ...e, numOfItem: 0 });
    o.numOfItem += e.numOfItem;
  });
  const res = Object.values(group);

  const [userName, setUserName] = useState("");
  const [nameNote, setNameNote] = useState("");
  const [nameBorder, setNameBorder] = useState("solid 1px #cfcfcf");
  const [email, setEmail] = useState("");
  const [emailNote, setEmailNote] = useState("");
  const [emailBorder, setEmailBorder] = useState("solid 1px #cfcfcf");
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneNumNote, setPhoneNumNote] = useState("");
  const [phoneBorder, setPhoneBorder] = useState("solid 1px #cfcfcf");
  const [address, setAddress] = useState("");
  const [addressNote, setAddressNote] = useState("");
  const [addressBorder, setAddressBorder] = useState("solid 1px #cfcfcf");
  const [zipCode, setZipCode] = useState("");
  const [codeNote, setCodeNote] = useState("");
  const [codeBorder, setCodeBorder] = useState("solid 1px #cfcfcf");
  const [city, setCity] = useState("");
  const [cityNote, setCityNote] = useState("");
  const [cityBorder, setCityBorder] = useState("solid 1px #cfcfcf");
  const [country, setCountry] = useState("");
  const [countryNote, setCountryNote] = useState("");
  const [countryBorder, setCountryBorder] = useState("solid 1px #cfcfcf");
  const [value, setValue] = useState("");
  const [border1, setBorder1] = useState("solid 1px #cfcfcf");
  const [displayBall1, setDisplayBall1] = useState("none");
  const [border2, setBorder2] = useState("solid 1px #cfcfcf");
  const [displayBall2, setDisplayBall2] = useState("none");
  const [eNumber, setENumber] = useState("");
  const [eNumNote, setENumNote] = useState("");
  const [eNumBorder, setENumBorder] = useState("solid 1px #cfcfcf");
  const [ePIN, setEPIN] = useState("");
  const [ePINNote, setEPINNote] = useState("");
  const [ePINBorder, setEPINBorder] = useState("solid 1px #cfcfcf");

  const [success, setSuccess] = useState(false);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
  const phoneRegex = /^\d+$/;

  const continueAndPay = () => {
    if (userName === "") {
      setNameNote("empty input");
      setNameBorder("solid 2px #CD2C2C");
    } else {
      setNameNote("");
      setNameBorder("solid 1px #cfcfcf");
    }

    if (email === "") {
      setEmailNote("empty input");
      setEmailBorder("solid 2px #CD2C2C");
    } else if (emailRegex.test(email)) {
      setEmailNote("");
      setEmailBorder("solid 1px #cfcfcf");
    } else {
      setEmailNote("wrong format");
      setEmailBorder("solid 2px #CD2C2C");
    }

    if (phoneNum === "") {
      setPhoneNumNote("empty input");
      setPhoneBorder("solid 2px #CD2C2C");
    } else if (phoneRegex.test(phoneNum)) {
      setPhoneNumNote("");
      setPhoneBorder("solid 1px #cfcfcf");
    } else {
      setPhoneNumNote("numbers only");
      setPhoneBorder("solid 2px #CD2C2C");
    }

    if (address === "") {
      setAddressNote("empty input");
      setAddressBorder("solid 2px #CD2C2C");
    } else {
      setAddressNote("");
      setAddressBorder("solid 1px #cfcfcf");
    }

    if (zipCode === "") {
      setCodeNote("empty input");
      setCodeBorder("solid 2px #CD2C2C");
    } else {
      setCodeNote("");
      setCodeBorder("solid 1px #cfcfcf");
    }

    if (city === "") {
      setCityNote("empty input");
      setCityBorder("solid 2px #CD2C2C");
    } else {
      setCityNote("");
      setCityBorder("solid 1px #cfcfcf");
    }

    if (country === "") {
      setCountryNote("empty input");
      setCountryBorder("solid 2px #CD2C2C");
    } else {
      setCountryNote("");
      setCountryBorder("solid 1px #cfcfcf");
    }

    if (value === "") {
      setBorder1("solid 2px #CD2C2C");
      setBorder2("solid 2px #CD2C2C");
    } else if (value === "e-money") {
      if (eNumber === "") {
        setENumNote("empty input");
        setENumBorder("solid 2px #CD2C2C");
      } else if (phoneRegex.test(eNumber)) {
        setENumNote("");
        setENumBorder("solid 1px #cfcfcf");
      } else {
        setENumNote("numbers only");
        setENumBorder("solid 2px #CD2C2C");
      }
      if (ePIN === "") {
        setEPINNote("empty input");
        setEPINBorder("solid 2px #CD2C2C");
      } else {
        setEPINNote("");
        setEPINBorder("solid 1px #cfcfcf");
      }
    } else if (value === "cash") {
      setDisplayBall2("flex");
      setDisplayBall1("none");
      setBorder2("solid 1px #d87d4a");
      setBorder1("solid 1px #cfcfcf");
    }
    if (
      userName &&
      emailRegex.test(email) &&
      phoneRegex.test(phoneNum) &&
      address &&
      zipCode &&
      city &&
      country &&
      value
    ) {
      setSuccess(true);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const handleClick1 = () => {
    setValue("e-money");
    setDisplayBall1("flex");
    setDisplayBall2("none");
    setBorder1("solid 1px #d87d4a");
    setBorder2("solid 1px #cfcfcf");
  };
  const handleClick2 = () => {
    setValue("cash");
    setDisplayBall2("flex");
    setDisplayBall1("none");
    setBorder2("solid 1px #d87d4a");
    setBorder1("solid 1px #cfcfcf");
  };

  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Container className={`${desktopSize ? `flex-r` : `flex-c`}`}>
      <Back />
      <form className="flex-c">
        <h3>CHECKOUT</h3>
        <div className="billing flex-c">
          <h3 className="sub-title">billing details</h3>
          <div className={`bill-flex ${tabletSize ? `flex-r` : `flex-c`}`}>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>Name</label>
                <p className="notes">{nameNote}</p>
              </div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{ border: `${nameBorder}` }}
              />
            </article>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>Email Address</label>
                <p className="notes">{emailNote}</p>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: `${emailBorder}` }}
              />
            </article>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>Phone Number</label>
                <p className="notes">{phoneNumNote}</p>
              </div>
              <input
                type="text"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                style={{ border: `${phoneBorder}` }}
              />
            </article>
          </div>
        </div>
        <div className="shipping flex-c">
          <div className="sub-title">shipping info</div>
          <div className={`ship-flex ${tabletSize ? `flex-r` : `flex-c`}`}>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>Your Address</label>
                <p className="notes">{addressNote}</p>
              </div>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ border: `${addressBorder}` }}
              />
            </article>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>ZIP Code</label>
                <p className="notes">{codeNote}</p>
              </div>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                style={{ border: `${codeBorder}` }}
              />
            </article>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>City</label>
                <p className="notes">{cityNote}</p>
              </div>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ border: `${cityBorder}` }}
              />
            </article>
            <article className="unit flex-c">
              <div className="label-line flex-r">
                <label>Country</label>
                <p className="notes">{countryNote}</p>
              </div>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{ border: `${countryBorder}` }}
              />
            </article>
          </div>
        </div>
        <PaymentDetails
          value={value}
          onClick1={handleClick1}
          onClick2={handleClick2}
          border1={border1}
          displayBall1={displayBall1}
          border2={border2}
          displayBall2={displayBall2}
          eNumber={eNumber}
          eNumNote={eNumNote}
          eNumBorder={eNumBorder}
          changeENum={(e) => setENumber(e.target.value)}
          ePIN={ePIN}
          ePINNote={ePINNote}
          ePINBorder={ePINBorder}
          changeEPIN={(e) => setEPIN(e.target.value)}
        />
      </form>

      <section className="total-summary flex-c">
        <h6>summary</h6>
        <div className="items-bought flex-c">
          {res.map((item, index) => (
            <SummaryItem
              key={index}
              img={item.image}
              name={item.name}
              price={item.price.toLocaleString()}
              num={item.numOfItem}
            />
          ))}
        </div>
        <div className="bill flex-c">
          <ul className="upper flex-c">
            <li>
              <p>TOTAL</p>
              <h6>$ {total.toLocaleString()}</h6>
            </li>
            <li>
              <p>SHIPPING</p>
              <h6>$ {total > 1000 ? "0" : "50"}</h6>
            </li>
            <i>(Free Delivery Over $ 1000)</i>
            <li>
              <p>VAT(INCLUDED)</p>
              <h6>$ {(total * 0.2).toLocaleString()}</h6>
            </li>
          </ul>
          <div className="lower flex-r">
            <p>GRAND TOTAL</p>
            <h6>
              $
              {total > 1000
                ? (total * 1.2).toLocaleString()
                : (total * 1.2 + 50).toLocaleString()}
            </h6>
          </div>
        </div>
        <button className="btn o-btn" onClick={continueAndPay}>
          CONTINUE & PAY
        </button>
      </section>

      {success ? (
        <Success
          img={res[0].image}
          name={res[0].name}
          price={res[0].price.toLocaleString()}
          num={res[0].numOfItem}
          rest={res.length - 1}
          total={
            total > 1000
              ? (total * 1.2).toLocaleString()
              : (total * 1.2 + 50).toLocaleString()
          }
        />
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 2rem 6%;
  background-color: var(--near-gray);
  form,
  .total-summary {
    padding: 2rem;
    margin: 2rem 0;
    background-color: white;
    border-radius: 0.6rem;
    gap: 2.5rem;
  }
  .billing,
  .shipping,
  .expand {
    gap: 1.5rem;
  }
  .bill-flex,
  .ship-flex {
    gap: 1rem;
  }
  .unit {
    gap: 0.5rem;
  }
  .sub-title {
    color: var(--dark-orange);
  }

  label {
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: -0.01rem;
  }
  input {
    height: 3.3rem;
    width: 100%;
    font-weight: 700;
    border-radius: 0.5rem;
    border: solid 1px #cfcfcf;
    color: rgba(0, 0, 0, 0.4);
    padding: 0.8rem 1rem;
    caret-color: var(--dark-orange);
    outline: transparent;
    &:focus {
      border: solid 1px var(--dark-orange);
    }
  }

  .total-summary {
    margin-bottom: 5rem;
    button {
      width: 100%;
    }
    .items-bought {
      gap: 1.5rem;
    }
    .bill {
      gap: 2rem;
      .upper {
        gap: 1rem;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            font-weight: 500;
            opacity: 0.5;
          }
        }
      }
    }
    .lower {
      justify-content: space-between;
      align-items: center;
      p {
        font-weight: 500;
        opacity: 0.5;
      }
      h6 {
        color: var(--dark-orange);
      }
    }
  }
  i {
    margin-top: -0.7rem;
    font-size: 0.85rem;
    opacity: 0.5;
    font-weight: 500;
  }

  @media (min-width: 760px) {
    .bill-flex {
      width: 100%;
      justify-content: space-between;
      gap: 0;
      flex-wrap: wrap;
      article {
        width: 49%;
      }
    }
    .ship-flex {
      width: 100%;
      justify-content: space-between;
      gap: 0;
      flex-wrap: wrap;
      article:nth-child(1) {
        width: 100%;
      }
      article {
        margin-bottom: 1rem;
        gap: 0.5rem;
        width: 49%;
      }
    }
  }

  @media (min-width: 1400px) {
    padding: 3rem 10%;
    position: relative;
    gap: 2rem;
    .back {
      position: absolute;
      top: 3rem;
    }
    form,
    .total-summary {
      margin-top: 4rem;
    }
    form {
      width: 70%;
    }
    .total-summary {
      height: max-content;
      padding-bottom: 3rem;
      width: 30%;
    }
  }
`;
