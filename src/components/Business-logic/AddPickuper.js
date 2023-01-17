import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import PickuperContext from "../../store/pickuper-ctx";
import classes from "./AddPickuper.module.css";

const AddPickuper = (props) => {
  const pickuperCtx = useContext(PickuperContext);
  const [inputName, setInputName] = useState("");
  const [pickuperProductivity, setPickuperProductivity] = useState(100);

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const productivityChangeHandler = (event) => {
    setPickuperProductivity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    pickuperCtx.addPickuper({
      name: inputName,
      productivity: pickuperProductivity,
    });

    setInputName("");
    setPickuperProductivity(100);
  };

  return (
    <div className={classes.container}>
      <div className={classes["pickupers-title"]}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label className={classes.label}>Pickuper Name</label>
          <input
            type="text"
            className={classes.input}
            onChange={inputNameChangeHandler}
            value={inputName}
          />
          <label>Productivity</label>
          <input
            type="number"
            step={5}
            min={0}
            max={100}
            className={classes.input}
            onChange={productivityChangeHandler}
            value={pickuperProductivity}
          />
          <p>%</p>

          <Button type="submit" className={classes.button}>
            Add pickuper
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPickuper;
