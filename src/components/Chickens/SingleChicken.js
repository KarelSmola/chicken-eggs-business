import React, { useContext, useRef } from "react";
import Button from "../UI/Button";
import ChickenCartContext from "../../store/chicken-cart";

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
      price: props.price,
      eggsPerDay: props.eggsPerDay,
      eggRetailPrice: props.eggRetailPrice,
      amount: numberChickensAmount,
    });

    chickenInputRef.current.value = 1;
  };

  return (
    <li key={props.id} className={classes.chicken}>
      <div className={classes.text}>{props.type}</div>
      <div className={classes.text}>{props.description}</div>
      <div>{props.eggsPerDay}</div>
      <div>{props.price}</div>
      <form onSubmit={submitHandler} className={classes["amount-form"]}>
        <label>Amount</label>
        <input
          ref={chickenInputRef}
          className={classes.input}
          type="number"
          min={1}
          step={1}
          defaultValue={1}
        />
        <Button className={classes.button}>Add</Button>
      </form>
    </li>
  );
};

export default SingleChicken;
