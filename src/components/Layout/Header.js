import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import eggImage from "../../components/assests/eggs_1.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}>Chicken Eggs Business</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={eggImage} alt="eggs" />
      </div>
    </Fragment>
  );
};

export default Header;
