import React, { useContext } from "react";
import Pickuper from "./Pickuper";
import PickuperContext from "../../store/pickuper-ctx";
import Button from "../UI/Button";
import classes from "./PickupersList.module.css";

const PickupersList = (props) => {
  const pickuperCtx = useContext(PickuperContext);

  return (
    <ul className={classes["pickupers-list"]}>
      {props.pickupers.map((pickuper) => (
        <li key={pickuper.id} className={classes.pickuper}>
          <Pickuper
            id={pickuper.id}
            name={pickuper.name}
            pickuperProductivity={pickuper.productivity}
            theoryEggsPerDay={pickuper.theoryEggsPerDay}
          />
          <Button onClick={pickuperCtx.removePickuper.bind(this, pickuper.id)}>
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default PickupersList;
