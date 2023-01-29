import React, { useState, useContext } from "react";
import PickuperContext from "./pickuper-ctx";
import ChickenCartContext from "./chicken-cart";

const PickupersContextProvider = (props) => {
  const chickenCtx = useContext(ChickenCartContext);
  const [pickupers, setPickupers] = useState([]);
  const [calcData, setCalcData] = useState([]);
  const [calcFinalData, setCalcFinalData] = useState(false);
  const [calcMessage, setCalcMessage] = useState(false);

  const productiveDays = 30;

  const theoryEggsPerDay = chickenCtx.theoryEggsPerDaySum;
  const theoryEggsPerMonth = theoryEggsPerDay * productiveDays;

  const theoryDayRevenue = chickenCtx.theoryDayRevenueSum;
  const theoryMonthRevenue = (theoryDayRevenue * productiveDays).toFixed(2);

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

    setCalcData([]);
    setCalcFinalData(false);
    setCalcMessage(true);
  };

  const removePickuper = (pickuperId) => {
    setPickupers((prevPickupers) =>
      prevPickupers.filter((pickuper) => pickuper.id !== pickuperId)
    );

    setCalcData([]);
    setCalcFinalData(false);
    setCalcMessage(true);
  };

  const pickupersData = pickupers.map((pickuper) => {
    return {
      name: pickuper.name,
      realEggsPerDay: +(
        (theoryEggsPerDay * (pickuper.productivity / 100)) /
        pickupers.length
      ).toFixed(1),
      realEggsPerMonth: +(
        (theoryEggsPerMonth * (pickuper.productivity / 100)) /
        pickupers.length
      ).toFixed(1),
      realDayRevenue: +(
        (theoryDayRevenue * (pickuper.productivity / 100)) /
        pickupers.length
      ).toFixed(2),
      realMonthRevenue: +(
        (theoryMonthRevenue * (pickuper.productivity / 100)) /
        pickupers.length
      ).toFixed(2),
    };
  });

  const realDayRevenueSum = pickupersData.reduce(
    (acc, curr) => +(acc + curr.realDayRevenue).toFixed(2),
    0
  );

  const realMonthRevenueSum = pickupersData.reduce(
    (acc, curr) => +(acc + curr.realMonthRevenue).toFixed(2),
    0
  );
  const realEggsPerDaySum = pickupersData.reduce(
    (acc, curr) => +(acc + curr.realEggsPerDay).toFixed(1),
    0
  );

  const realEggsPerMonthSum = pickupersData.reduce(
    (acc, curr) => +(acc + curr.realEggsPerMonth).toFixed(1),
    0
  );

  const finalData = {
    realDayRevenueSum,
    realMonthRevenueSum,
    realEggsPerDaySum,
    realEggsPerMonthSum,
  };

  const calcROI = () => {
    setCalcData(pickupersData);
    setCalcFinalData(true);

    setCalcMessage(false);
  };

  const initial = {
    pickupers,
    addPickuper,
    removePickuper,
    productiveDays,
    theoryEggsPerMonth,
    theoryMonthRevenue,
    calcROI,
    calcData,
    calcFinalData,
    finalData,
    calcMessage,
  };

  return (
    <PickuperContext.Provider value={initial}>
      {props.children}
    </PickuperContext.Provider>
  );
};

export default PickupersContextProvider;
