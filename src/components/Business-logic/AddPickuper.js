import React, { useState } from "react";
import Button from "../UI/Button";

import classes from "./AddPickuper.module.css";

const AddPickuper = (props) => {
  const [pickuperName, setPickuperName] = useState("");

  const inputChangeHandler = (event) => {
    setPickuperName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let newPickuper = { id: Math.random().toString(), name: pickuperName };

    props.onAddPickuper(newPickuper);

    setPickuperName("");
  };

  return (
    <div className={classes["pickupers-title"]}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label className={classes.label}>Pickuper Name</label>
        <input
          type="text"
          className={classes.input}
          onChange={inputChangeHandler}
          value={pickuperName}
        />
        <Button className={classes.button}>Add pickuper</Button>
      </form>
    </div>
  );
};

export default AddPickuper;
