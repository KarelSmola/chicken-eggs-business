import React from "react";

import classes from "./Pickuper.module.css";

const Pickuper = (props) => {
  return (
    <li key={props.id} className={classes.inputs}>
      <p>Pickuper {props.name}</p>
      <div className={classes["input-container"]}>
        <input
          onChange={props.onChange}
          value={props.value}
          className={classes.input}
          type="number"
          step="5"
          min="0"
          max="100"
          // defaultValue={props.defaultValue}
        />
        <p>%</p>
      </div>
    </li>
  );
};

export default Pickuper;
