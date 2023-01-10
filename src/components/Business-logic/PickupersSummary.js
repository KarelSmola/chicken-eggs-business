import React, { useContext } from "react";
import AddPickuper from "./AddPickuper";
import PickupersList from "./PickupersList";
import ChickenCartContext from "../../store/chicken-cart";

import classes from "./PickupersSummary.module.css";
import PickuperContext from "../../store/pickuper-ctx";

const PickupersSummary = () => {
  const pickuperCtx = useContext(PickuperContext);
  const chickenCtx = useContext(ChickenCartContext);

  return (
    <div className={classes.container}>
      <AddPickuper />
      <PickupersList
        pickupers={pickuperCtx.pickupers}
        chickens={chickenCtx.chickensInCart}
        productiveDays={chickenCtx.productiveDays}
      />
    </div>
  );
};

export default PickupersSummary;
