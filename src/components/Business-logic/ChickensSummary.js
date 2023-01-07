import React from "react";
import BusinessChickensList from "./BusinessChickensList";
import ChickensTotals from "./ChickensTotals";

import classes from "./ChickensSummary.module.css";

const ChickensSummary = () => {
  return (
    <div className={classes.summary}>
      <div className={classes.title}>
        <p className={classes.type}>Type</p>
        <p className={classes["eggs-per-day"]}>Eggs per day</p>
        <p className={classes.amount}>Amount</p>
        <p className={classes.price}>Price</p>
        <p className={classes.rrp}>RRP per egg</p>
      </div>
      <BusinessChickensList />
      <ChickensTotals />
    </div>
  );
};

export default ChickensSummary;
