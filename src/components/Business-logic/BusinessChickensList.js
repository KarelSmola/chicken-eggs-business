import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./BusinessChickensList.module.css";

const BusinessChickensList = (props) => {
  const chickenCtx = useContext(ChickenCartContext);

  return (
    <ul className={classes["chickens-list"]}>
      {chickenCtx.chickensInCart.map((chicken) => (
        <li className={classes.chicken}>
          <p className={classes.type}>{chicken.type}</p>
          <p className={classes["eggs-per-day"]}>{chicken.eggsPerDay}</p>
          <p className={classes.amount}>{chicken.amount}x</p>
          <p className={classes.price}>$ {chicken.price.toFixed(2)}</p>
          <p className={classes.rrp}>$ {chicken.eggRetailPrice.toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
};

export default BusinessChickensList;
