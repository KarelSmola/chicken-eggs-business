import React, { useState } from "react";
import PickuperContext from "./pickuper-ctx";

const PickupersContextProvider = (props) => {
  const [pickupers, setPickupers] = useState([]);

  const addPickuper = (pickuper) => {
    if (pickupers.length === 3) {
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

  const initial = {
    pickupers: pickupers,
    addPickuper: addPickuper,
    productiveDays: 30,
  };

  return (
    <PickuperContext.Provider value={initial}>
      {props.children}
    </PickuperContext.Provider>
  );
};

export default PickupersContextProvider;
