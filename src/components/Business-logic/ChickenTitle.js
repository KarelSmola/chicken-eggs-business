import React from "react";

import classes from "./ChickenTitle.module.css";

const ChickenTitle = () => {
  return (
    <div className={classes.title}>
      <p className={classes.type}>Type</p>
      <p className={classes["eggs-per-day"]}>Eggs / day</p>
      <p className={classes.amount}>Amount</p>
      <p className={classes.price}>Price</p>
      <p className={classes.rrp}>RRP / egg</p>
    </div>
  );
};

export default ChickenTitle;
