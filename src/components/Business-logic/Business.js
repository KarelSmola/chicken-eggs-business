import React, { Fragment } from "react";
import BusinessHeader from "./BusinessHeader";
import PickupersSummary from "./PickupersSummary";
import BusinessChickensList from "./BusinessChickensList";

import classes from "./Business.module.css";

const Business = () => {
  return (
    <Fragment>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <BusinessChickensList />

        <PickupersSummary />
      </main>
    </Fragment>
  );
};

export default Business;
