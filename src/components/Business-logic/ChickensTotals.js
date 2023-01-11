import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./ChickensTotals.module.css";

const ChickensTotals = () => {
  const chickenCtx = useContext(ChickenCartContext);

  return (
    <div className={classes.container}>
      <p className={classes.total}>Total</p>
      <p>{chickenCtx.theoryEggsPerDaySum}</p>
      <p>{chickenCtx.totalChickensAmunt}x</p>
      <p>$ {chickenCtx.totalChickensPrice.toFixed(2)}</p>
      <p>$ {chickenCtx.theoryDayRevenue}</p>
    </div>
  );
};

export default ChickensTotals;
