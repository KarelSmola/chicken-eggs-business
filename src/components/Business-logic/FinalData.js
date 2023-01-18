import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";

// import classes from "./FinalData.module.css";

const FinalData = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);

  return (
    <div>
      <p>Real eggs per day {pickuperCtx.finalData.realEggsPerDaySum}</p>
      <p>Real eggs per month {pickuperCtx.finalData.realEggsPerMonthSum}</p>
      <p> Real revenue per day ${pickuperCtx.finalData.realDayRevenueSum}</p>
      <p>
        {" "}
        Real revenue per month ${pickuperCtx.finalData.realMonthRevenueSum}
      </p>
      <p>
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
