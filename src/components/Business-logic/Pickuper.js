import React, { Fragment } from "react";

import classes from "./Pickuper.module.css";

const Pickuper = (props) => {
  return (
    <Fragment>
      <p className={classes.title}>Pickuper {props.name}</p>
      <p className={classes.title}>{props.id}</p>
      <p className={classes.title}>{props.pickuperProductivity} %</p>
    </Fragment>
  );
};

export default Pickuper;
