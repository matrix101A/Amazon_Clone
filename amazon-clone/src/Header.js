import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* Redirecting to homepage  */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
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
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionlineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
