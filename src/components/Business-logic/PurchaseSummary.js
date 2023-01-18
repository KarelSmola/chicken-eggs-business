import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";

import classes from "./PurchaseSummary.module.css";

const PurchaseSummary = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);

  return (
    <div className={classes.container}>
      <h2>Purchase summary</h2>
      <ul className={classes["chickens-list"]}>
        <div className={classes.title}>
          <p className={classes.type}>Type</p>
          <p className={classes.amount}>Amount</p>

          <p className={classes.price}>Price</p>
          <p className={classes["eggs-per-day"]}>Eggs / day</p>
          <p className={classes.rrp}>Retail price / egg</p>
        </div>
        {chickenCtx.chickensInCart.map((chicken) => (
          <li key={chicken.id} className={classes.chicken}>
            <p className={classes.type}>{chicken.type}</p>
            <p className={classes.amount}>{chicken.amount}x</p>
            {/* <p className={classes.price}>$ {chicken.price.toFixed(2)}</p> */}
            <p className={classes.price}>$ {chicken.price}</p>
            <p className={classes["eggs-per-day"]}>{chicken.eggsPerDay}</p>
            <p className={classes.rrp}>$ {chicken.eggRetailPrice.toFixed(2)}</p>
          </li>
        ))}
        <div className={classes.totals}>
          <p className={classes.total}>Total</p>
          <p>{chickenCtx.totalChickensAmunt}x</p>
          <p>$ {chickenCtx.totalChickensPrice}</p>
          <p>{chickenCtx.theoryEggsPerDaySum}</p>
          <p>$ {chickenCtx.theoryDayRevenueSum}</p>
        </div>
      </ul>
      <div className={classes["header-purchase-summary"]}>
        <p>You bought 4 chickens.</p>
        <p>
          They can give you up to {pickuperCtx.theoryEggsPerMonth} eggs per
          month and you can earn in $ {pickuperCtx.theoryMonthRevenue}.
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

export default PurchaseSummary;
