import React, { Fragment, useContext } from "react";
import AddPickuper from "./AddPickuper";
import PickupersList from "./PickupersList";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./PickupersSummary.module.css";
import PickuperContext from "../../store/pickuper-ctx";

const PickupersSummary = () => {
  const pickuperCtx = useContext(PickuperContext);
  const chickenCtx = useContext(ChickenCartContext);
  const { productiveDays } = pickuperCtx;

  const theoryPickuperEggsMonth = Math.floor(
    (chickenCtx.theoryEggsPerDaySum * productiveDays) /
      pickuperCtx.pickupers.length
  );

  const realPickuperEggsMonth = theoryPickuperEggsMonth * 0.5;

  const calcPickuperData = (pickuperId) => {
    let pickupersData = [];

    const theoryPickuperEggsMonth = Math.floor(
      (chickenCtx.theoryEggsPerDaySum * productiveDays) /
        pickuperCtx.pickupers.length
    );

    const pickuperProductivity = pickuperCtx.pickupers.map(
      (pickuper) => pickuper.id === pickuperId && pickuper.productivity
    );

    pickupersData.concat(
      ...pickupersData,
      theoryPickuperEggsMonth * (pickuperProductivity / 100)
    );

    let updatedData = pickupersData.concat(
      theoryPickuperEggsMonth * (pickuperProductivity / 100)
    );
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <AddPickuper pickuperEggs={theoryPickuperEggsMonth} />
        <PickupersList
          pickupers={pickuperCtx.pickupers}
          chickens={chickenCtx.chickensInCart}
          productiveDays={chickenCtx.productiveDays}
          theoryTotalEggsMonth={theoryPickuperEggsMonth}
          realTotalEggsMonth={realPickuperEggsMonth}
          calcPickuperData={calcPickuperData}
        />
      </div>
    </Fragment>
  );
};

export default PickupersSummary;
