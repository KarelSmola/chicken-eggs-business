import React, { Fragment, useContext } from "react";
import PickupersList from "./PickupersList";
import ChickenCartContext from "../../../store/chicken-cart";
import AddPickuper from "./AddPickuper";
import PickuperData from "./PickuperData";
import PickuperContext from "../../../store/pickuper-ctx";
import FinalData from "../FinalData";
import Button from "../../UI/Button";

import classes from "./PickupersSummary.module.css";

const PickupersSummary = () => {
  const pickuperCtx = useContext(PickuperContext);
  const chickenCtx = useContext(ChickenCartContext);

  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Pickupers</h2>
        <AddPickuper />
        <PickupersList
          pickupers={pickuperCtx.pickupers}
          chickens={chickenCtx.chickensInCart}
        />
        <div className={classes["data-container"]}>
          <PickuperData />
          {pickuperCtx.calcMessage && pickuperCtx.pickupers.length > 0 ? (
            <p className={classes["calc-message"]}>
              Click Calculate button to calculate or recalculate data
            </p>
          ) : (
            ""
          )}
          {pickuperCtx.calcFinalData && <FinalData />}
          {pickuperCtx.pickupers.length > 0 && (
            <Button
              onClick={pickuperCtx.calcROI}
              className={classes["calc-btn"]}
            >
              Calculate
            </Button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PickupersSummary;
