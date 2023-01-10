import React from "react";

const PickuperContext = React.createContext({
  pickupers: [],
  productiveDays: "",
  addPickuper: (pickuper) => {},
  nameChangeHandler: (name) => {},
  productivityChangeHandler: (number) => {},
  pickuperName: "",
});

export default PickuperContext;
