import React from "react";
import BusinessChickensList from "./BusinessChickensList";
import ChickensTotals from "./ChickensTotals";

import classes from "./ChickensSummary.module.css";
import ChickenTitle from "./ChickenTitle";

const ChickensSummary = () => {
  return (
    <div className={classes.summary}>
      <ChickenTitle />
      <BusinessChickensList />
      <ChickensTotals />
    </div>
  );
};

export default ChickensSummary;
