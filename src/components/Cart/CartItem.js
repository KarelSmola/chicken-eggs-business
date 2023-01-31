import React from "react";
import PlusIcon from "../UI/Icons/PlusIcon";
import MinusIcon from "../UI/Icons/MinusIcon";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div key={props.key} className={classes.item}>
      <div className={classes.type}>{props.type}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes["eggs-per-day"]}>{props.eggsPerDay}</div>
      <div className={classes.price}>{`$ ${props.price.toFixed(2)}`}</div>
      <div className={classes.amount}>{props.amount}x</div>
      <div className={classes.buttons}>
        <button className={classes.plus} onClick={props.onRemove}>
          <MinusIcon />
        </button>
        <button className={classes.plus} onClick={props.onAdd}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
