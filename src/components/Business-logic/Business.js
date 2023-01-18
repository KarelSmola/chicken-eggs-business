import React, { Fragment } from "react";
import BusinessHeader from "./BusinessHeader";
import PickupersSummary from "./Pickupers/PickupersSummary";
import PurchaseSummary from "./PurchaseSummary";

import classes from "./Business.module.css";

const Business = () => {
  return (
    <Fragment>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <PurchaseSummary />
        <PickupersSummary />
      </main>
    </Fragment>
  );
};

export default Business;
