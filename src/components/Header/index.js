import React from "react";
import "./style.css";
import logoImg from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import cartIcon from "../../assets/shopping-cart.svg";
import moreOptionsIcon from "../../assets/open-menu.svg";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <div className="logo">
          <img src={logoImg} alt="logoImg" />
        </div>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </nav>
        <div className="functions">
          <li>
            <img src={searchIcon} alt="icone de pesquisa" />
          </li>
          <li>
            <img src={cartIcon} alt="icone de carrinho" />
          </li>
          <li>
            <img src={moreOptionsIcon} alt="icone de mais opções" />
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
