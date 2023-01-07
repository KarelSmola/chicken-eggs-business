import React, { useState, useContext } from "react";
import AddPickuper from "./AddPickuper";
import PickupersList from "./PickupersList";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./PickupersSummary.module.css";

const PickupersSummary = () => {
  const chickenCtx = useContext(ChickenCartContext);
  const [pickupers, setPickupers] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");

  const pickuperInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const addPickuper = (pickuper) => {
    if (pickupers.length === 3) {
      return;
    }

    setPickupers((prevPickupers) => [...prevPickupers, pickuper]);
  };

  const calc = () => {
    const eggsPerDay = chickenCtx.chickensInCart.map(
      (chicken) => chicken.eggsPerDay
    );
    console.log(eggsPerDay[0] * (+enteredValue / 100));
  };

  return (
    <div className={classes.container}>
      <AddPickuper onAddPickuper={addPickuper} />
      <PickupersList
        pickupers={pickupers}
        onChange={pickuperInputChangeHandler}
        value={enteredValue}
        // defaultValue={100}
      />
      <button onClick={calc}>Calculate</button>
    </div>
  );
};

export default PickupersSummary;
