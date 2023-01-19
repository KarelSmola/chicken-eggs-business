import React, { useContext } from "react";
import PickuperContext from "../../../store/pickuper-ctx";
import MinusIcon from "../../UI/Icons/MinusIcon";
import XmarkIcon from "../../UI/Icons/XmarkIcon";

import classes from "./Pickuper.module.css";

const Pickuper = (props) => {
  const pickuperCtx = useContext(PickuperContext);

  return (
    <div className={classes.pickuper}>
      <div className={classes["about-pickuper"]}>
        <p className={classes.title}>{props.name}</p>
        <p className={classes.title}>{props.pickuperProductivity} %</p>
      </div>
      <button
        onClick={pickuperCtx.removePickuper.bind(this, props.id)}
        className={classes.trash}
      >
        <XmarkIcon />
      </button>
    </div>
  );
};

export default Pickuper;
