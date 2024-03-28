import React from "react";

import { NAV_ITEMS } from "../../static";

import { FaApple } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

import "./Header.scss";

function Header() {
  const navItem = NAV_ITEMS.map((el, inx) => {
    return (
      <li key={inx}>
        <a href="#index">{el}</a>
      </li>
    );
  });
  return (
    <header>
      <nav className="container nav">
        <ul className="nav__list">
          <li>
            <a href="#index">
              <FaApple className="apple__icon" />
            </a>
          </li>
          {navItem} <IoSearch style={{color: "white"}} /> <MdOutlineShoppingBag style={{color: "white"}}/>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
