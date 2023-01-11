import React, { useState, useContext } from "react";
import PickuperContext from "./pickuper-ctx";
import ChickenCartContext from "./chicken-cart";

const PickupersContextProvider = (props) => {
  const chickenCtx = useContext(ChickenCartContext);
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

  const calcPickuperData = (pickuperId) => {
    const theoryPickuperEggsMonth = Math.floor(
      (chickenCtx.theoryEggsPerDaySum * 20) / pickupers.length
    );

    const filterRightPickuper = pickupers.map(
      (pickuper) =>
        pickuper.id === pickuperId && {
          id: pickuper.id,
          name: pickuper.name,
          productivity: pickuper.productivity,
        }
    );

    const [rightPickuper] = filterRightPickuper.filter(
      (pickuper) => pickuper !== false
    );

    const realPickuperEggsMonth = Math.floor(
      theoryPickuperEggsMonth * (rightPickuper.productivity / 100)
    );

    let pickuperData = { realData: realPickuperEggsMonth };

    console.log(pickupers.length);
    console.log(rightPickuper.productivity);
    console.log(theoryPickuperEggsMonth);
    console.log(realPickuperEggsMonth);
    console.log(pickuperData.realData);

    return { realData: realPickuperEggsMonth };
  };

  const initial = {
    pickupers: pickupers,
    addPickuper: addPickuper,
    removePickuper: removePickuper,
    productiveDays: 20,
    calcPickuperData: calcPickuperData,
  };

  return (
    <PickuperContext.Provider value={initial}>
      {props.children}
    </PickuperContext.Provider>
  );
};

export default PickupersContextProvider;
