import React, { Fragment } from "react";
import ChickensSummary from "./ChickensSummary";
import BusinessHeader from "./BusinessHeader";

import classes from "./Business.module.css";
import PickupersSummary from "./PickupersSummary";
import BusinessSummary from "./BusinessSummary";

const Business = () => {
  return (
    <Fragment>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <ChickensSummary />
        <PickupersSummary />
      </main>
      <BusinessSummary />
    </Fragment>
  );
};

export default Business;
