import React, { Fragment } from "react";

import classes from "./Pickuper.module.css";

const Pickuper = (props) => {
  return (
    <Fragment>
      <p className={classes.title}>{props.name}</p>
      <p className={classes.title}>
        Productivity {props.pickuperProductivity} %
      </p>
    </Fragment>
  );
};

export default Pickuper;
