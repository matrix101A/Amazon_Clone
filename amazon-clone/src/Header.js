import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg"
      />

      <div className="header__search" type="text">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineOne">Hello , Abhinav </span>
          <span className="header__optionlineTwo">Sign In </span>
        </div>
        <div className="header__option">
          <span className="header__optionlineOne">Return </span>
          <span className="header__optionlineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineOne">Try,</span>
          <span className="header__optionlineTwo">Prime </span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionlineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default header;
