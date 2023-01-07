import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li key={props.key} className={classes.item}>
      <div className={classes.type}>{props.type}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes["eggs-per-day"]}>{props.eggsPerDay}</div>
      <div className={classes.price}>{`$ ${props.price.toFixed(2)}`}</div>
      <div className={classes.amount}>{props.amount}x</div>
      <div className={classes.buttons}>
        <button className={classes.btn} onClick={props.onRemove}>
          -
        </button>
        <button className={classes.btn} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
