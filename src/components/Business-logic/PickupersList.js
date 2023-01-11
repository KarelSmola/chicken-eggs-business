import React, { useContext } from "react";
import Pickuper from "./Pickuper";
import PickuperContext from "../../store/pickuper-ctx";

import classes from "./PickupersList.module.css";

const PickupersList = (props) => {
  const pickuperCtx = useContext(PickuperContext);

  return (
    <ul className={classes.pickupers}>
      {props.pickupers.map((pickuper) => (
        <li key={pickuper.id} className={classes.pickuper}>
          <Pickuper
            id={pickuper.id}
            name={pickuper.name}
            pickuperProductivity={pickuper.productivity}
          />
          <button
            onClick={pickuperCtx.calcPickuperData.bind(this, pickuper.id)}
          >
            Calculate
          </button>
          <button onClick={pickuperCtx.removePickuper.bind(this, pickuper.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PickupersList;
