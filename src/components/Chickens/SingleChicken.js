import React from "react";

import classes from "./SingleChicken.module.css";

const SingleChicken = (props) => {
  return (
    <li key={props.id} className={classes.chicken}>
      <span>{props.type}</span>
      <span>{props.description}</span>
      <span>{props.eggsPerDay}</span>
      <span>{props.price}</span>
      <form>
        <label>Amount</label>
        <input type="number" step={1} defaultValue={1} />
        <button>Add</button>
      </form>
    </li>
  );
};

export default SingleChicken;
