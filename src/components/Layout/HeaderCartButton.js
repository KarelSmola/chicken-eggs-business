import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import CartIcon from "../UI/Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const chickenCtx = useContext(ChickenCartContext);

  const chickensAmountInCart = chickenCtx.chickensInCart.reduce(
    (prev, chicken) => {
      return prev + chicken.amount;
    },
    0
  );

  return (
    <button onClick={props.onShowCart} className={classes["cart-btn"]}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{chickensAmountInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
