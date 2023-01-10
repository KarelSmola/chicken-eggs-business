import React from "react";
import PickuperContextProvider from "../../store/PickupersContextProvider";
import ChickensSummary from "./ChickensSummary";
import BusinessHeader from "./BusinessHeader";

import classes from "./Business.module.css";
import PickupersSummary from "./PickupersSummary";

const Business = () => {
  return (
    <PickuperContextProvider>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <ChickensSummary />
        <PickupersSummary />
      </main>
    </PickuperContextProvider>
  );
};

export default Business;
