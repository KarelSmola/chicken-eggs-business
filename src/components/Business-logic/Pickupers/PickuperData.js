import React, { useContext } from "react";
import PickuperContext from "../../../store/pickuper-ctx";

import classes from "./PickuperData.module.css";

const PickuperData = () => {
  const pickuperCtx = useContext(PickuperContext);

  return (
    <ul className={classes["data-list"]}>
      {pickuperCtx.calcData.map((pickuper) => (
        <li key={Math.random().toString()} className={classes["pickuper-data"]}>
          <p>{pickuper.realEggsPerDay}</p>
          <p>{pickuper.realEggsPerMonth}</p>
          <p>$ {pickuper.realDayRevenue} </p>
          <p>$ {pickuper.realMonthRevenue} </p>
        </li>
      ))}
    </ul>
  );
};

export default PickuperData;
