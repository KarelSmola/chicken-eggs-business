import React, { Fragment, useContext } from "react";
import Pickuper from "./Pickuper";
import PickuperContext from "../../../store/pickuper-ctx";

import classes from "./PickupersList.module.css";

const PickupersList = (props) => {
  const pickuperCtx = useContext(PickuperContext);

  const titleBlack = classes["black-title"];
  const titleGrey = classes["grey-title"];

  const titlePickuper1ClassName =
    pickuperCtx.pickupers.length > 0 ? titleBlack : titleGrey;

  const titlePickuper2ClassName =
    pickuperCtx.pickupers.length > 1 ? titleBlack : titleGrey;

  const titlePickuper3ClassName =
    pickuperCtx.pickupers.length > 2 ? titleBlack : titleGrey;

  const titlePickuper4ClassName =
    pickuperCtx.pickupers.length > 3 ? titleBlack : titleGrey;

  return (
    <Fragment>
      <ul className={classes["pickupers-column-title"]}>
        <li
          className={`${classes["pickuper-title"]} ${titlePickuper1ClassName}`}
        >
          Pickuper 1
        </li>
        <li
          className={`${classes["pickuper-title"]} ${titlePickuper2ClassName}`}
        >
          Pickuper 2
        </li>
        <li
          className={`${classes["pickuper-title"]} ${titlePickuper3ClassName}`}
        >
          Pickuper 3
        </li>
        <li
          className={`${classes["pickuper-title"]} ${titlePickuper4ClassName}`}
        >
          Pickuper 4
        </li>
      </ul>
      <ul className={classes.pickupers}>
        {props.pickupers.map((pickuper) => (
          <li key={pickuper.id} className={classes.pickuper}>
            <Pickuper
              id={pickuper.id}
              name={pickuper.name}
              pickuperProductivity={pickuper.productivity}
            />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default PickupersList;
