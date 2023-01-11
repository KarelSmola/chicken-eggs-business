import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";

import classes from "./BusinessSummary.module.css";

const BusinessSummary = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);
  const { productiveDays } = pickuperCtx;

  const theoryEggsPerMonth = chickenCtx.theoryEggsPerDaySum * productiveDays;

  const pickuperProductivity = pickuperCtx.pickupers.map(
    (pickuper) => pickuper.productivity / 100
  );

  const realEggsPerMonth = theoryEggsPerMonth * pickuperProductivity;

  const theoryMonthRevenue = (
    chickenCtx.theoryDayRevenue * productiveDays
  ).toFixed(2);

  const realMothRevenue = theoryMonthRevenue * pickuperProductivity;

  const calcROI = () => {
    console.log(theoryEggsPerMonth);
  };

  return (
    <div className={classes["business-summary"]}>
      <button onClick={calcROI}>Calculate</button>
      <p>
        You have {pickuperCtx.pickupers.length}{" "}
        {pickuperCtx.pickupers.length === 1 ? "pickuper" : "pickupers"}
      </p>
      <p>Your chickens give you in theory {theoryEggsPerMonth} per month</p>
      <p>In reality they give you {realEggsPerMonth}</p>
      <p>You can earn in theory $ {theoryMonthRevenue}</p>
      <p>In reality your revenue is $ {realMothRevenue}</p>
    </div>
  );
};

export default BusinessSummary;
