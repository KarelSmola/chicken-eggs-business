import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import ChickenCartContext from "../../store/chicken-cart";
import Button from "../UI/Button";

import classes from "./Cart.module.css";

// const DUMMY_CHICKENS = [
//   {
//     id: "ch-01",
//     type: "Brown Chicken",
//     description: "The best chicken",
//     eggsPerDay: 5,
//     price: 10,
//   },
//   {
//     id: "ch-02",
//     type: "Yellow Chicken",
//     description: "Good chicken",
//     eggsPerDay: 3,
//     price: 5,
//   },
//   {
//     id: "ch-03",
//     type: "Black Chicken",
//     description: "Still good",
//     eggsPerDay: 1,
//     price: 3,
//   },
//   {
//     id: "ch-04",
//     type: "White Chicken",
//     description: "Chicken Guardian",
//     eggsPerDay: 0,
//     price: 20,
//   },
// ];

const Cart = (props) => {
  const chickenCtx = useContext(ChickenCartContext);

  const totalPrice = `$${chickenCtx.totalChickensPrice.toFixed(2)}`;

  const hasChickens = chickenCtx.chickensInCart.length > 0;

  const addOneChicken = (chicken) => {
    chickenCtx.addChicken({ ...chicken, amount: 1 });
  };

  const removeOneChicken = (chickenId) => {
    chickenCtx.removeChicken(chickenId);
  };

  const orderChickens = () => {
    props.onOrder();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart}>
        {!hasChickens && <h2>No chickens in the cart!</h2>}
        <ul className={classes.items}>
          {chickenCtx.chickensInCart.map((item) => (
            <CartItem
              key={item.id}
              type={item.type}
              description={item.description}
              eggsPerDay={item.eggsPerDay}
              price={item.price}
              amount={item.amount}
              onAdd={addOneChicken.bind(null, item)}
              onRemove={removeOneChicken.bind(null, item.id)}
            />
          ))}
        </ul>
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
