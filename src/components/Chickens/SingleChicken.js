import React from "react";

import classes from "./SingleChicken.module.css";

const SingleChicken = (props) => {
  return (
    <li key={props.id} className={classes.chicken}>
      <span>{props.type}</span>
      <span>{props.description}</span>
      <span>{props.eggsPerDay}</span>
      <span>{props.price}</span>
    </li>
  );
};

export default SingleChicken;
