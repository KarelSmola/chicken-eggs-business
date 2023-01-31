import React from "react";

import classes from "./BusinessHeader.module.css";

const BusinessHeader = () => {
  return (
    <div className={classes["title-container"]}>
      <h1 className={classes.title}>Welcolme to your business page</h1>
      <h2 className={classes["title-small"]}>
        Let's have a look how profitable your business will be.
      </h2>
    </div>
  );
};

export default BusinessHeader;
