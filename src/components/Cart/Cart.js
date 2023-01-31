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

  const addChickenInCart = (chicken) => {
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

  const oneOrpingtonToHowManyChickens = 3;

  const orpingtonsWanted = Math.ceil(
    chickensWithoutOrpingtonAmount / oneOrpingtonToHowManyChickens
  );

  const orpingtons = chickenCtx.chickensInCart.filter(
    (chicken) => chicken.type === "Orpington"
  );

  const orpingtonsAmount = orpingtons.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const anotherOrpington = orpingtonsWanted - orpingtonsAmount;

  const validOrpingtonsAmount =
    orpingtonsWanted === orpingtonsAmount ||
    orpingtonsAmount > orpingtonsWanted;

  const orpingtonOrpingtons = anotherOrpington & 1 ? "Orpington" : "Orpingtons";
  const errorMessage = `You have to order at least ${anotherOrpington} more ${orpingtonOrpingtons}`;
  const okMessage = `OK You can order your chickens`;

  const message = validOrpingtonsAmount ? okMessage : errorMessage;

  const orderChickens = () => {
    if (!validOrpingtonsAmount) {
      setOrpingtonError(true);
      return;
    }

    props.onOrder();
  };

  const errorClasses = validOrpingtonsAmount
    ? `${classes.message}`
    : `${classes.message} ${classes.error}`;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        <div className={classes["chickens-columns-title"]}>
          <p className={classes.type}>Type</p>
          <p className={classes.description}>Description</p>
          <p className={classes.eggs}>Eggs per day</p>
          <p className={classes.price}>Price</p>
          <p className={classes.amount}>Amount</p>
        </div>
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
                onAdd={addChickenInCart.bind(null, item)}
                onRemove={removeOneChicken.bind(null, item.id)}
              />
            </li>
          ))}
        </ul>
        {orpingtonError && (
          <p className={`${classes.message} ${errorClasses}`}>{message}</p>
        )}
        <div className={classes["items-summary"]}>
          <h3 className={classes["total-price"]}>Total price {totalPrice}</h3>
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
