import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import menuIcon from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import Categories from "./Categories";

export default function Header() {
  const [display, setDisplay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [hide, setHide] = useState(true);
  const displayCart = (e) => {
    const { classList } = e.target;
    if (!classList.contains("show")) {
      classList.add("show");
      setDisplay(true);
    } else {
      classList.remove("show");
      setDisplay(false);
    }
  };
  const displayMenu = (e) => {
    const { classList } = e.target;
    if (!classList.contains("show-menu")) {
      classList.add("show-menu");
      setShowMenu(true);
    } else {
      classList.remove("show-menu");
      setShowMenu(false);
    }
  };

  const hideMenu = () => {
    setHide(true);
    setShowMenu(false);
  };

  const desktopSize = window.matchMedia("(min-width: 1400px)").matches;

  return (
    <Container className="flex-r">
      {desktopSize ? (
        ""
      ) : (
        <img src={menuIcon} alt="menu" onClick={displayMenu} />
      )}

      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {desktopSize ? (
        <ul className="menu-bar flex-r">
          <li>
            <Link to="/headphones">
              <h6>headphones</h6>
            </Link>
          </li>
          <li>
            <Link to="/speakers">
              <h6>speakers</h6>
            </Link>
          </li>
          <li>
            <Link to="/earphones">
              <h6>earphones</h6>
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}

      <img
        className="cart-icon"
        src={cartIcon}
        alt="cart"
        onClick={displayCart}
      />

      {showMenu ? (
        <section className="toggle-menu absolute">
          <Categories handleClick={hideMenu} />
        </section>
      ) : (
        ""
      )}

      {hide ? (
        ""
      ) : (
        <section className="toggle-menu absolute">
          <Categories handleClick={hideMenu} />
        </section>
      )}

      {display ? <Cart /> : ""}
    </Container>
  );
}

const Container = styled.div`
  z-index: 5;
  height: 6rem;
  width: 100%;
  padding: 0 6%;
  background-color: var(--near-black);
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
  .toggle-menu {
    position: absolute;
    z-index: 10;
    width: 100%;
    left: 0;
    top: 6rem;
    background-color: white;
    border-radius: 0 0 0.6rem 0.6rem;
    box-shadow: 0 0 0 20rem rgba(0, 0, 0, 0.4);
  }
  @media (min-width: 760px) {
    justify-content: flex-start;
    position: relative;
    gap: 4rem;
    .cart-icon {
      position: absolute;
      right: 6%;
    }
    .toggle-menu {
      .Categories {
        margin-top: 1rem;
        padding: 1rem 6%;
      }
    }
  }

  @media (min-width: 1400px) {
    padding: 0 10%;
    height: 7rem;
    ul.menu-bar {
      margin-left: 12rem;
      gap: 3rem;
      color: white;
      opacity: 0.9;
      li {
        h6 {
          font-size: 0.9rem;
        }
        &:hover {
          color: var(--dark-orange);
        }
      }
    }
    .cart-icon {
      right: 10%;
    }
  }
`;
