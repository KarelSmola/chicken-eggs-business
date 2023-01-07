import React, { Fragment, useState } from "react";
import ChickensSummary from "./ChickensSummary";
import BusinessHeader from "./BusinessHeader";
import Pickuper from "./Pickuper";

import classes from "./Business.module.css";

const Business = () => {
  const [newPickuper, setNewPickuper] = useState([]);
  const [pickupersLimit, setPickupersLimit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addPickuper = () => {
    if (newPickuper.length === 3) {
      setPickupersLimit(true);
      return;
    }

    setNewPickuper((prevPickupers) => [
      ...prevPickupers,
      <Pickuper name={inputValue} />,
    ]);

    setInputValue("");
  };

  return (
    <Fragment>
      <BusinessHeader />
      <main className={classes["main-container"]}>
        <ChickensSummary />
        <div>
          <button onClick={addPickuper}>Add pickuper</button>
          <input type="text" onChange={inputChangeHandler} value={inputValue} />
          {pickupersLimit && <p>You can have max 3 pickupers</p>}
          {newPickuper}
        </div>
      </main>
    </Fragment>
  );
};

export default Business;
