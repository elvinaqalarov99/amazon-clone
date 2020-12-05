/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  function UserGreeting() {
    return (
      <div className="header__option">
        <span className="header__optionLineOne">
          Hello {state?.user?.email}
        </span>
        <Link style={{ color: "white", textDecoration: "none" }}>
          <span
            onClick={() => auth.signOut().then(() => history.push("/"))}
            className="header__optionLineTwo"
          >
            Sign Out
          </span>
        </Link>
      </div>
    );
  }
  function GuestGreeting() {
    return (
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </Link>
    );
  }
  function Greeting() {
    if (state.user) return <UserGreeting />;
    else return <GuestGreeting />;
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Greeting />

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className />
            <span className="header__optionLineTwo header__basketCount">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
