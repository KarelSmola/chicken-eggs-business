import React from "react";

import classes from "./ChickensSummary.module.css";

const ChickensSummary = () => {
  return (
    <section className={classes["chickens-summary"]}>
      <p className={classes.text}>
        If you want to see how your chickens bussiness can looks like
      </p>
      <h2 className={classes.title}>order our chickens</h2>
      <p className={classes.text}>and will show you how to make a business.</p>
      <p className={classes.text}>
        Remember that you have to order one Orpington chicken for three "normal"
        chickens.
      </p>
    </section>
  );
};

export default ChickensSummary;
