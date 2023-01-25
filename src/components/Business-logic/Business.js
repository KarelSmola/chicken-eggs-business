import React, { Fragment } from "react";
import BusinessHeader from "./BusinessHeader";
import PickupersSummary from "./Pickupers/PickupersSummary";
import PurchaseSummary from "./PurchaseSummary";
import Button from "../UI/Button";

import classes from "./Business.module.css";

const Business = (props) => {
  return (
    <Fragment>
      <Button onClick={props.onBackToOrder} className={classes.btn}>
        Back to order
      </Button>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <PurchaseSummary />
        <PickupersSummary />
      </main>
    </Fragment>
  );
};

export default Business;
