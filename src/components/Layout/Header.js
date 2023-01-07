import React, { Fragment } from "react";

import eggImage from "../../components/assests/eggs_1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chicken Eggs Business</h1>
        <HeaderCartButton onShowCart={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={eggImage} alt="eggs" />
      </div>
    </Fragment>
  );
};

export default Header;
