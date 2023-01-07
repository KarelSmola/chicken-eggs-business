import React, { Fragment } from "react";
import ChickensSummary from "./ChickensSummary";
import BusinessHeader from "./BusinessHeader";

import classes from "./Business.module.css";
import PickupersSummary from "./PickupersSummary";

const Business = () => {
  return (
    <Fragment>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <ChickensSummary />
        <PickupersSummary />
      </main>
    </Fragment>
  );
};

export default Business;
