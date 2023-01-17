import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./BusinessChickensList.module.css";

const BusinessChickensList = () => {
  const chickenCtx = useContext(ChickenCartContext);

  return (
    <div className={classes.container}>
      <h1>Purchase summary</h1>
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
            <p className={classes.price}>$ {chicken.price.toFixed(2)}</p>
            <p className={classes["eggs-per-day"]}>{chicken.eggsPerDay}</p>
            <p className={classes.rrp}>$ {chicken.eggRetailPrice.toFixed(2)}</p>
          </li>
        ))}
        <div className={classes.totals}>
          <p className={classes.total}>Total</p>
          <p>{chickenCtx.totalChickensAmunt}x</p>
          <p>$ {chickenCtx.totalChickensPrice.toFixed(2)}</p>
          <p>{chickenCtx.theoryEggsPerDaySum}</p>
          <p>$ {chickenCtx.theoryDayRevenue}</p>
        </div>
      </ul>
    </div>
  );
};

export default BusinessChickensList;
