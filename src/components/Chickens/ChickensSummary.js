import React from "react";

import classes from "./ChickensSummary.module.css";

const ChickensSummary = () => {
  return (
    <section className={classes["chickens-summary"]}>
      <h2>Order our chickens</h2>
      <p>We will show you how to make a business.</p>
      <p>All our chickens are best.</p>
    </section>
  );
};

export default ChickensSummary;
