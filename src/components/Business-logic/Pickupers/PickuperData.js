import React, { useContext } from "react";
import PickuperContext from "../../../store/pickuper-ctx";

import classes from "./PickuperData.module.css";

const PickuperData = () => {
  const pickuperCtx = useContext(PickuperContext);

  return (
    <ul className={classes["data-list"]}>
      {pickuperCtx.calcData.map((pickuper) => (
        <li key={Math.random().toString()} className={classes["pickuper-data"]}>
          <p>{pickuper.realEggsPerDay} eggs / day</p>
          <p>{pickuper.realEggsPerMonth} eggs / month</p>
          <p>$ {pickuper.realDayRevenue} real revenue / day</p>
          <p>$ {pickuper.realMonthRevenue} real revenue / month</p>
        </li>
      ))}
    </ul>
  );
};

export default PickuperData;
