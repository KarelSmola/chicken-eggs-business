import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./ChickensTotals.module.css";

const ChickensTotals = () => {
  const chickenCtx = useContext(ChickenCartContext);

  const chickensAmount = chickenCtx.chickensInCart.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const eggsPerDay = chickenCtx.chickensInCart.reduce((acc, curr) => {
    return acc + curr.eggsPerDay;
  }, 0);

  const totalPrice = chickenCtx.totalChickensPrice;

  const whiteChickenIndex = chickenCtx.chickensInCart.findIndex(
    (chicken) => chicken.eggsPerDay === 0
  );

  const chickensWithoutWhiteChicken = chickenCtx.chickensInCart.filter(
    (chicken) =>
      chicken.eggsPerDay !==
      chickenCtx.chickensInCart[whiteChickenIndex].eggsPerDay
  );

  const dailySales = chickensWithoutWhiteChicken.reduce((acc, curr) => {
    const currSales = curr.amount * curr.eggsPerDay * curr.eggRetailPrice;
    return acc + currSales;
  }, 0);

  return (
    <div className={classes.container}>
      <p className={classes.total}>Total</p>
      <p>{eggsPerDay}</p>
      <p>{chickensAmount}x</p>
      <p>$ {totalPrice.toFixed(2)}</p>
      <p>$ {dailySales.toFixed(2)}</p>
    </div>
  );
};

export default ChickensTotals;
