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
          pickuperProductivity={pickuper.productivity}
        />
      ))}
    </ul>
  );
};

export default PickupersList;
