import React, { useState, useContext } from "react";
import PickuperContext from "./pickuper-ctx";
// import ChickenCartContext from "./chicken-cart";

const PickupersContextProvider = (props) => {
  // const chickenCtx = useContext(ChickenCartContext);
  const [pickupers, setPickupers] = useState([]);

  const productiveDays = 20;

  // const theoryEggsPerDay = chickenCtx.theoryEggsPerDaySum;
  // const theoryEggsPerMonth = theoryEggsPerDay * productiveDays;

  const addPickuper = (pickuper) => {
    if (pickupers.length === 4) {
      return;
    }

    setPickupers((prevPickupers) => [
      ...prevPickupers,
      {
        id: Math.random().toString(),
        name: pickuper.name,
        productivity: pickuper.productivity,
        // theoryEggsPerDay: theoryEggsPerDay,
        // theoryEggsPerMonth: theoryEggsPerMonth,
      },
    ]);
  };

  const removePickuper = (pickuperId) => {
    setPickupers((prevPickupers) =>
      prevPickupers.filter((pickuper) => pickuper.id !== pickuperId)
    );
  };

  const initial = {
    pickupers,
    addPickuper,
    removePickuper,
    productiveDays,
  };

  return (
    <PickuperContext.Provider value={initial}>
      {props.children}
    </PickuperContext.Provider>
  );
};

export default PickupersContextProvider;
