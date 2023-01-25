import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import ChickenCartContext from "../../store/chicken-cart";
import Button from "../UI/Button";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const chickenCtx = useContext(ChickenCartContext);
  const [orpingtonError, setOrpingtonError] = useState(false);

  const totalPrice = `$ ${chickenCtx.totalChickensPrice}`;

  const hasChickens = chickenCtx.chickensInCart.length > 0;

  const addOneChicken = (chicken) => {
    chickenCtx.addChicken({ ...chicken, amount: 1 });
  };

  const removeOneChicken = (chickenId) => {
    chickenCtx.removeChicken(chickenId);
  };

  const chickensWithoutOrpington = chickenCtx.chickensInCart.filter(
    (chicken) => chicken.type !== "Orpington"
  );

  const chickensWithoutOrpingtonAmount = chickensWithoutOrpington.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const orpingtons = chickenCtx.chickensInCart.filter(
    (chicken) => chicken.type === "Orpington"
  );

  const orpingtonAmount = orpingtons.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const chickensOrpingtonRatio =
    chickensWithoutOrpingtonAmount / orpingtonAmount;

  const oneOrpingtonToHowManyChickens = 3.1;

  let anotherOrpington;

  anotherOrpington = Math.floor(
    chickensOrpingtonRatio / oneOrpingtonToHowManyChickens
  );

  if (anotherOrpington === Infinity) {
    anotherOrpington = 1;
  }

  const inValidOrpingtonsAmount = chickensOrpingtonRatio > 3;
  const orpingtonOrpingtons = anotherOrpington & 1 ? "Orpington" : "Orpingtons";
  const errorMessage = `You have to order at least ${anotherOrpington} more ${orpingtonOrpingtons}`;
  const okMessage = `OK You can order your chickens`;

  const message = inValidOrpingtonsAmount ? errorMessage : okMessage;

  const orderChickens = () => {
    if (inValidOrpingtonsAmount) {
      setOrpingtonError(true);
      return;
    }

    props.onOrder();
  };

  const errorClasses = inValidOrpingtonsAmount
    ? `${classes.message} ${classes.error}`
    : `${classes.message}`;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        {!hasChickens && <h2>No chickens in the cart!</h2>}
        <ul className={classes.items}>
          {chickenCtx.chickensInCart.map((item) => (
            <li key={item.id}>
              <CartItem
                type={item.type}
                description={item.description}
                eggsPerDay={item.eggsPerDay}
                price={item.price}
                amount={item.amount}
                onAdd={addOneChicken.bind(null, item)}
                onRemove={removeOneChicken.bind(null, item.id)}
              />
            </li>
          ))}
        </ul>
        {orpingtonError && (
          <p className={`${classes.message} ${errorClasses}`}>{message}</p>
        )}
        <div className={classes["items-summary"]}>
          <h3 className={classes.price}>Total price {totalPrice}</h3>
          <div className={classes.buttons}>
            <Button className={classes.btn} onClick={props.onClose}>
              Close
            </Button>
            {hasChickens && (
              <Button onClick={orderChickens} className={classes.btn}>
                Order
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
