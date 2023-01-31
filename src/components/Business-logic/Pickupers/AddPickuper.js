import React, { useContext, useState, useEffect } from "react";
import PickuperContext from "../../../store/pickuper-ctx";
import PlusIcon from "../../UI/Icons/PlusIcon";

import classes from "./AddPickuper.module.css";

const AddPickuper = () => {
  const pickuperCtx = useContext(PickuperContext);
  const [inputName, setInputName] = useState("");
  const [pickuperProductivity, setPickuperProductivity] = useState(100);
  const [hasError, setHasError] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  const inputNameChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setHasError(false);
    }

    setInputName(event.target.value);
  };

  const productivityChangeHandler = (event) => {
    setPickuperProductivity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0) {
      setHasError(true);
      return;
    }

    pickuperCtx.addPickuper({
      name: inputName,
      productivity: pickuperProductivity,
    });

    setInputName("");
    setPickuperProductivity(100);
  };

  useEffect(() => {
    if (pickuperCtx.pickupers.length === 4) {
      setInputDisabled(true);
    }
  }, [pickuperCtx.pickupers.length]);

  useEffect(() => {
    if (pickuperCtx.pickupers.length < 4) {
      setInputDisabled(false);
    }
  }, [pickuperCtx.pickupers.length]);

  const inputClasses = hasError
    ? `${classes.input} ${classes["input-error"]}`
    : `${classes.input}`;

  const buttonClasses = inputDisabled
    ? `${classes["plus-disabled"]}`
    : `${classes.plus}`;

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.name}>
          <label className={classes.label}>Pickuper Name</label>
          <input
            type="text"
            className={inputClasses}
            onChange={inputNameChangeHandler}
            value={inputName}
            placeholder={"Write a name"}
            disabled={inputDisabled}
          />
        </div>
        <div className={classes.productivity}>
          <label className={classes.label}>Productivity</label>
          <input
            type="number"
            step={5}
            min={0}
            max={100}
            className={classes.input}
            onChange={productivityChangeHandler}
            value={pickuperProductivity}
            disabled={inputDisabled}
          />
          <p className={classes.label}>%</p>
        </div>

        <button
          type="submit"
          className={buttonClasses}
          disabled={inputDisabled}
        >
          <PlusIcon />
        </button>
      </form>
    </div>
  );
};

export default AddPickuper;
