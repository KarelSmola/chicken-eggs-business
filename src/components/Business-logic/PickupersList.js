import React from "react";
import Pickuper from "./Pickuper";

import classes from "./PickupersList.module.css";

const PickupersList = (props) => {
  return (
    <ul className={classes.pickupers}>
      {props.pickupers.map((pickuper) => (
        <Pickuper
          id={pickuper.id}
          name={pickuper.name}
          onChange={props.onChange}
          value={props.value}
          // defaultValue={props.defaultValue}
        />
      ))}
    </ul>
  );
};

export default PickupersList;
