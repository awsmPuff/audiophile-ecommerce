import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import data from "../data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import Quantity from "../components/Quantity";
import { useDispatch } from "react-redux";
import Back from "../components/Back";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);

  const slug = useParams();
  const clicked = data.filter((d) => d.slug === slug.slug);
  const clickedProduct = clicked[0];
  const alsoLike = clickedProduct.others;
  const gallery = clickedProduct.gallery;
  const inTheBox = clickedProduct.includes;
  const singlePrice = clickedProduct.price;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const minusOne = () => {
    if (num > 1) {
      setNum(num - 1);
    } else {
      setNum(1);
    }
  };
  const addOne = () => {
    setNum(num + 1);
  };

  const addToCart = () => {
    return {
      type: "ADD_TO_CART",
      payload: {
        name: clickedProduct.name,
        price: singlePrice,
        numOfItem: num,
        image: clickedProduct.image.mobile,
      },
    };
  };

  const tabletSize = window.matchMedia("(min-width: 760px)").matches;
  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Layout>
      <Container>
        <Back />

        <div className={`pro ${tabletSize ? `flex-r` : `flex-c`}`}>
          <img
            src={
              desktopSize
                ? clickedProduct.image.desktop
                : tabletSize
                ? clickedProduct.image.tablet
                : clickedProduct.image.mobile
            }
            alt={clickedProduct.name}
          />
          <div className="pro-texts flex-c">
            <span
              className="overline"
              style={{ display: `{${clickedProduct.new} ? 'flex' : 'none'  }` }}
            >
              new product
            </span>
            <h2>{clickedProduct.name}</h2>
            <p>{clickedProduct.description}</p>
            <div className="price">$ {singlePrice.toLocaleString()}</div>
            <section className="combine flex-r">
              <Quantity num={num} minus={minusOne} add={addOne} />
              <button
                className="btn o-btn"
                onClick={() => dispatch(addToCart())}
              >
                add to cart
              </button>
            </section>
          </div>
        </div>

        <div className={`f-b ${desktopSize ? `flex-r` : `flex-c`}`}>
          <div className="features flex-c">
            <h3>Features</h3>
            <p>{clickedProduct.features}</p>
          </div>
          <div className={`in-the-box ${tabletSize ? `flex-r` : `flex-c`}`}>
            <h3>in the box</h3>
            <ul className="flex-c">
              {inTheBox.map((b, index) => (
                <li key={index}>
                  <span>{b.quantity}x &nbsp;&nbsp;&nbsp;&nbsp; </span>
                  {b.item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`gallery ${tabletSize ? `` : `flex-c`}`}>
          <img
            className="g-1"
            src={
              desktopSize
                ? gallery.first.desktop
                : tabletSize
                ? gallery.first.tablet
                : gallery.first.mobile
            }
            alt=""
          />
          <img
            className="g-2"
            src={
              desktopSize
                ? gallery.second.desktop
                : tabletSize
                ? gallery.second.tablet
                : gallery.second.mobile
            }
            alt=""
          />
          <img
            className="g-3"
            src={
              desktopSize
                ? gallery.third.desktop
                : tabletSize
                ? gallery.third.tablet
                : gallery.third.mobile
            }
            alt=""
          />
        </div>
        <div className={`you-may-like ${tabletSize ? `flex-r` : `flex-c`}`}>
          <h3>You may also like</h3>
          {alsoLike.map((p, index) => (
            <YouMayAlsoLike
              key={index}
              img={
                desktopSize
                  ? p.image.desktop
                  : tabletSize
                  ? p.image.tablet
                  : p.image.mobile
              }
              name={p.name}
              link={`/productdetails/${p.slug}`}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 2rem 6%;
  .pro {
    margin-top: 2rem;
    gap: 2rem;
    img {
      border-radius: 0.6rem;
    }
    .pro-texts {
      gap: 1.5rem;
      .overline {
        color: var(--dark-orange);
      }
      p {
        font-weight: 500;
        opacity: 0.5;
        line-height: 1.6rem;
      }
      .price {
        font-weight: 700;
        font-size: 1.18rem;
        letter-spacing: 0.08rem;
      }
      .combine {
        height: 3.5rem;
        gap: 1rem;
        .quantity {
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
          }
        }
      }
    }
  }
  .features {
    margin: 5rem 0;
    gap: 2rem;
    p {
      font-weight: 500;
      opacity: 0.5;
      line-height: 1.6rem;
      white-space: pre-line;
    }
  }
  .in-the-box {
    gap: 2rem;
    ul {
      gap: 1rem;
      li {
        text-transform: capitalize;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
        span {
          font-weight: 700;
          color: var(--dark-orange);
        }
      }
    }
  }
  .gallery {
    margin: 5rem 0;
    gap: 1.5rem;
    img {
      border-radius: 0.6rem;
    }
  }
  .you-may-like {
    gap: 1rem;
    width: 100%;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 760px) {
    .pro {
      gap: 3.5rem;
      img {
        width: 43%;
      }
      .pro-texts {
        width: 57%;
        gap: 1.5rem;
        justify-content: center;
        .price {
          margin: 1rem 0;
        }
      }
    }
    .in-the-box {
      justify-content: space-between;
      ul {
        width: 50%;
      }
    }
    .gallery {
      width: 100%;
      height: 25rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1.3fr;
      grid-template-areas:
        "a-1 a-3"
        "a-2 a-3";
      .g-1,
      .g-2 {
        width: 100%;
        height: 100%;
      }
      .g-1 {
        grid-area: a-1;
      }
      .g-2 {
        grid-area: a-2;
      }
      .g-3 {
        grid-area: a-3;
        width: 100%;
        height: 100%;
      }
    }
    .you-may-like {
      position: relative;
      padding-top: 3rem;
      h3 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  @media (min-width: 1400px) {
    padding: 4rem 10% 2rem;
    .pro {
      gap: 8rem;
    }
    .f-b {
      width: 100%;
      height: 22rem;
      margin: 7rem 0;
      gap: 7rem;
      .features {
        width: 70%;
        padding: 0;
        margin: 0;
      }
      .in-the-box {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;
        ul {
          width: 100%;
        }
      }
    }
    .gallery {
      height: 36rem;
      gap: 1.5rem;
      grid-template-columns: 1fr 1.4fr;
      margin: 5rem 0 7rem;
    }
  }
`;
