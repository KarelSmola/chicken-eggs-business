import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";

import classes from "./PurchaseSummary.module.css";

const PurchaseSummary = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Purchase summary</h2>
      <ul className={classes.title}>
        <p className={classes.type}>Type</p>
        <p className={classes.amount}>Amount</p>

        <p className={classes.price}>Price</p>
        <p className={classes["eggs-per-day"]}>Eggs / day</p>
        <p className={classes.rrp}>Retail price / egg</p>
      </ul>
      <ul className={classes["chickens-list"]}>
        {chickenCtx.chickensInCart.map((chicken) => (
          <li key={chicken.id} className={classes.chicken}>
            <p className={classes.type}>{chicken.type}</p>
            <p className={classes.amount}>{chicken.amount}x</p>
            <p className={classes.price}>$ {chicken.price.toFixed(2)}</p>
            <p className={classes["eggs-per-day"]}>{chicken.eggsPerDay}</p>
            <p className={classes.rrp}>$ {chicken.eggRetailPrice.toFixed(2)}</p>
          </li>
        ))}
        <div className={classes.totals}>
          <p className={classes.total}>Total</p>
          <p>{chickenCtx.totalChickensAmunt}x</p>
          <p>$ {chickenCtx.totalChickensPrice}</p>
          <p>{chickenCtx.theoryEggsPerDaySum}</p>
          <p>$ {chickenCtx.theoryDayRevenueSum.toFixed(2)}</p>
        </div>
      </ul>
      <div className={classes["summary-text"]}>
        <p>
          You bought{" "}
          <span className={classes.bold}>
            {chickenCtx.totalChickensAmunt} chickens.
          </span>
        </p>
        <p>
          They can give you up to{" "}
          <span className={classes.bold}>
            {pickuperCtx.theoryEggsPerMonth} eggs per month{" "}
          </span>{" "}
          and you can{" "}
          <span className={classes.bold}>
            earn up to $ {pickuperCtx.theoryMonthRevenue}.
          </span>
        </p>
        <p>
          But these numbers are just theory numbers. You (or your pickupers)
          will unfortunatelly brake some eggs.
        </p>
        <p>
          <span className={classes.bold}>
            So let's go to set up your pickupers team.
          </span>
        </p>
      </div>
    </div>
  );
};

export default PurchaseSummary;
