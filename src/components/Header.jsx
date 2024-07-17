import React from "react";

import Cart from "../assets/img/Cart.svg";
import HeaderLogo from "../assets/img/HeaderLogo.svg";
import ShevronDown from "../assets/img/ShevronDown.svg";

function Header() {
  return (
    <>
      <div className="header_container container">
        <div className="header_left">
          <img src={HeaderLogo} alt="" className="header__left_logo" />
          <div className="header__left_city_container">
            <div className="header__left_city_txt">Санкт-Петербург</div>
            <img src={ShevronDown} alt="" className="header__left_city_arr" />
          </div>
        </div>
        <div className="header_right">
          <div className="header__right_phone">+7 (343) 237-23-72</div>
          <div className="header__right_line"></div>
          <div className="header__right_busket_container">
            <img src={Cart} alt="" className="header__right_busket" />
            <div className="header__right_busket_num">0</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
