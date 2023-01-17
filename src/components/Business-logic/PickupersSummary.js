import React, { Fragment, useContext } from "react";
import PickupersList from "./PickupersList";
import ChickenCartContext from "../../store/chicken-cart";
import AddPickuper from "./AddPickuper";

import PickuperData from "./PickuperData";
import classes from "./PickupersSummary.module.css";
import PickuperContext from "../../store/pickuper-ctx";

const PickupersSummary = () => {
  const pickuperCtx = useContext(PickuperContext);
  const chickenCtx = useContext(ChickenCartContext);

  const pickuper1Color =
    pickuperCtx.pickupers.length > 0
      ? `${classes["black-title"]}`
      : `${classes["grey-title"]}`;

  const pickuper2Color =
    pickuperCtx.pickupers.length > 1
      ? `${classes["black-title"]}`
      : `${classes["grey-title"]}`;

  const pickuper3Color =
    pickuperCtx.pickupers.length > 2
      ? `${classes["black-title"]}`
      : `${classes["grey-title"]}`;

  const pickuper4Color =
    pickuperCtx.pickupers.length > 3
      ? `${classes["black-title"]}`
      : `${classes["grey-title"]}`;

  return (
    <Fragment>
      <div className={classes.container}>
        <AddPickuper />
        <ul className={classes["pickupers-title"]}>
          <li className={pickuper1Color}>Pickuper 1</li>
          <li className={pickuper2Color}>Pickuper 2</li>
          <li className={pickuper3Color}>Pickuper 3</li>
          <li className={pickuper4Color}>Pickuper 4</li>
        </ul>
        <PickupersList
          pickupers={pickuperCtx.pickupers}
          chickens={chickenCtx.chickensInCart}
        />
        <PickuperData />
      </div>
    </Fragment>
  );
};

export default PickupersSummary;
