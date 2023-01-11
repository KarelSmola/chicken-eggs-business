import React, { useState } from "react";
import PickuperContext from "./pickuper-ctx";

const PickupersContextProvider = (props) => {
  const [pickupers, setPickupers] = useState([]);

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
      },
    ]);
  };

  const removePickuper = (pickuperId) => {
    setPickupers((prevPickupers) =>
      prevPickupers.filter((pickuper) => pickuper.id !== pickuperId)
    );
  };

  const initial = {
    pickupers: pickupers,
    addPickuper: addPickuper,
    removePickuper: removePickuper,
    productiveDays: 20,
  };

  return (
    <PickuperContext.Provider value={initial}>
      {props.children}
    </PickuperContext.Provider>
  );
};

export default PickupersContextProvider;
