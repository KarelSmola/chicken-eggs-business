import React from "react";

import classes from "./ChickensIntro.module.css";

const ChickensIntro = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>
        If you want to see how your chickens bussiness can looks like
      </p>
      <h2 className={classes.title}>order our chickens</h2>
      <p className={classes.text}>and will show you how to make a business.</p>
      <h2 className={classes.title}>
        Remember that you have to order one Orpington chicken for three "normal"
        chickens!
      </h2>
    </div>
  );
};

export default ChickensIntro;
