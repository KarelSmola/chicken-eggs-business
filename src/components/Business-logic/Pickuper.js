import React, { Fragment, useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";

import classes from "./Pickuper.module.css";

const Pickuper = (props) => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);

  return (
    <Fragment>
      <p>Pickuper {props.name}</p>
      <p>{props.pickuperProductivity} %</p>
    </Fragment>
  );
};

export default Pickuper;
