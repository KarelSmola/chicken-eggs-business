import React, { useContext, useRef } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PlusIcon from "../UI/Icons/PlusIcon";

import classes from "./SingleChicken.module.css";

const SingleChicken = (props) => {
  const chickenInputRef = useRef();
  const chickenCtx = useContext(ChickenCartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const chickensAmount = chickenInputRef.current.value;
    const numberChickensAmount = +chickensAmount;

    chickenCtx.addChicken({
      id: props.id,
      type: props.type,
      description: props.description,
      price: props.price * numberChickensAmount,
      eggsPerDay: props.eggsPerDay * numberChickensAmount,
      eggRetailPrice:
        props.eggRetailPrice * numberChickensAmount * props.eggsPerDay,
      amount: numberChickensAmount,
    });

    chickenInputRef.current.value = 1;
  };

  return (
    <div className={classes.chicken}>
      <p className={classes.text}>{props.type}</p>
      <p className={classes.text}>{props.description}</p>
      <p>{props.eggsPerDay}</p>
      <p>$ {props.price.toFixed(2)}</p>
      <form onSubmit={submitHandler} className={classes["amount-form"]}>
        <label></label>
        <input
          ref={chickenInputRef}
          className={classes.input}
          type="number"
          min={1}
          step={1}
          defaultValue={1}
        />
        <button className={classes.plus} onClick={props.onAdd}>
          <PlusIcon />
        </button>
      </form>
    </div>
  );
};

export default SingleChicken;
