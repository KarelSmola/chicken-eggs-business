import React, { useContext, useState } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";
import Button from "../UI/Button";

import classes from "./PickuperData.module.css";

const PickuperData = () => {
  const [calcData, setCalcData] = useState([]);
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);
  const { productiveDays } = pickuperCtx;

  const theoryEggsPerMonth = chickenCtx.theoryEggsPerDaySum * productiveDays;

  const theoryMonthRevenue = +(
    chickenCtx.theoryDayRevenue * productiveDays
  ).toFixed(2);

  const pickupersData = pickuperCtx.pickupers.map((pickuper) => {
    return {
      name: pickuper.name,
      theoryEggsPerMonth: theoryEggsPerMonth,
      realEggsPerMonth: (
        (theoryEggsPerMonth * (pickuper.productivity / 100)) /
        pickuperCtx.pickupers.length
      ).toFixed(2),
      theoryMonthRevenue: theoryMonthRevenue,
      realMonthRevenue: +(
        (theoryMonthRevenue * (pickuper.productivity / 100)) /
        pickuperCtx.pickupers.length
      ).toFixed(2),
    };
  });

  const realMonthRevenueSum = pickupersData
    .reduce((acc, curr) => acc + curr.realMonthRevenue, 0)
    .toFixed(2);

  const calcROI = () => {
    setCalcData(pickupersData);
  };

  return (
    <div className={classes["pickupers-data"]}>
      <ul className={classes["data-list"]}>
        {calcData.map((pickuper) => (
          <li key={Math.random().toString()}>
            {/* <p>{pickuper.theoryEggsPerMonth}</p> */}
            <p>{pickuper.realEggsPerMonth} eggs/month</p>
            <p>$ {pickuper.realMonthRevenue} real revenue</p>
          </li>
        ))}
        {/* <p>{realMonthRevenueSum}</p> */}
      </ul>
      <Button onClick={calcROI}>Calculate</Button>
    </div>
  );
};

export default PickuperData;
