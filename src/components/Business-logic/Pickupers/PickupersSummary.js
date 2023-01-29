import React, { useContext } from "react";
import PickupersList from "./PickupersList";
import ChickenCartContext from "../../../store/chicken-cart";
import AddPickuper from "./AddPickuper";
import PickuperData from "./PickuperData";
import PickuperContext from "../../../store/pickuper-ctx";
import FinalData from "../FinalData";
import Button from "../../UI/Button";

import classes from "./PickupersSummary.module.css";

const PickupersSummary = (props) => {
  const pickuperCtx = useContext(PickuperContext);
  const chickenCtx = useContext(ChickenCartContext);

  return (
    <div className={classes.summary}>
      <AddPickuper />
      <div className={classes["pickupers-team-row-title"]}>
        <p>Pickuper {pickuperCtx.pickupers.length} of 4</p>
      </div>
      <div className={classes["pickupers-row-title"]}>
        <p>Name</p>
        <p>Productivity</p>
      </div>
      <PickupersList
        pickupers={pickuperCtx.pickupers}
        chickens={chickenCtx.chickensInCart}
      />
      {pickuperCtx.calcFinalData && (
        <div className={classes["pickupers-data-row-title"]}>
          <p>Real eggs per day</p>
          <p>Real eggs per month</p>
          <p>Real revenue per day</p>
          <p>Real revenue per month</p>
        </div>
      )}

      <div className={classes["data-container"]}>
        <PickuperData />
      </div>
      {pickuperCtx.calcMessage && pickuperCtx.pickupers.length > 0 ? (
        <p className={classes["calc-message"]}>
          Click Calculate button to calculate or recalculate data
        </p>
      ) : (
        ""
      )}

      {pickuperCtx.calcFinalData && (
        <div className={classes["final-data-row-title"]}>
          <p>Final data</p>
        </div>
      )}

      <div className={classes["final-data"]}>
        {pickuperCtx.calcFinalData && <FinalData />}
      </div>
      {pickuperCtx.pickupers.length > 0 && (
        <Button onClick={pickuperCtx.calcROI} className={classes.btn}>
          Calculate
        </Button>
      )}
    </div>
  );
};

export default PickupersSummary;
