import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";

import classes from "./FinalData.module.css";

const FinalData = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);

  return (
    <div className={classes.container}>
      <div className={classes.tables}>
        <table className={classes["summary-table"]}>
          <thead>
            <tr>
              <th rowSpan={2}></th>
              <th colSpan={2}>Eggs</th>
            </tr>
            <tr>
              <th>Day</th>
              <th>Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Theory</th>
              <td>{chickenCtx.theoryEggsPerDaySum}</td>
              <td>{pickuperCtx.theoryEggsPerMonth}</td>
            </tr>
            <tr>
              <th>Reality</th>
              <td>{pickuperCtx.finalData.realEggsPerDaySum}</td>
              <td>{pickuperCtx.finalData.realEggsPerMonthSum}</td>
            </tr>
          </tbody>
        </table>
        <table className={classes["summary-table"]}>
          <thead>
            <tr>
              <th rowSpan={2}></th>
              <th colSpan={3}>Revenue</th>
            </tr>
            <tr>
              <th>Day</th>
              <th>Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Theory</th>
              <td>$ {chickenCtx.theoryDayRevenueSum.toFixed(2)}</td>
              <td>$ {pickuperCtx.theoryMonthRevenue}</td>
            </tr>
            <tr>
              <th>Reality</th>
              <td>$ {pickuperCtx.finalData.realDayRevenueSum.toFixed(2)}</td>
              <td>$ {pickuperCtx.finalData.realMonthRevenueSum.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={classes["roi-info"]}>
        Your investement will be competely back in{" "}
        {Math.ceil(
          chickenCtx.totalChickensPrice /
            pickuperCtx.finalData.realMonthRevenueSum
        )}{" "}
        month.
      </p>
    </div>
  );
};

export default FinalData;
