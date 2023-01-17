import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";
import classes from "./BusinessHeader.module.css";

const BusinessHeader = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);
  const { productiveDays } = pickuperCtx;

  const theoryEggsPerMonth = chickenCtx.theoryEggsPerDaySum * productiveDays;

  const theoryMonthRevenue = +(
    chickenCtx.theoryDayRevenue * productiveDays
  ).toFixed(2);

  return (
    <div className={classes["title-container"]}>
      <h1 className={classes.title}>Welcolme to your business page</h1>
      <h2 className={classes["title-small"]}>
        Let's have a look how profitable your business will be.
      </h2>
      <div className={classes["header-purchase-summary"]}>
        <p>You bought 4 chickens. </p>
        <p>
          They can give you up to {theoryEggsPerMonth} eggs per month and you
          can earn in $ {theoryMonthRevenue}.
        </p>
        <p>
          But these numbers are just theory numbers. You (or your pickupers)
          will unfortunatelly brake some eggs.
        </p>
        <p>So let's go to set up your pickupers team.</p>
      </div>
    </div>
  );
};

export default BusinessHeader;
