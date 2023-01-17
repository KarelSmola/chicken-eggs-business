import React from "react";

const PickuperContext = React.createContext({
  pickupers: [],
  addPickuper: (pickuper) => {},
  removePickuper: (id) => {},
  productiveDays: "",
  calcPickuperData: () => {},
});

export default PickuperContext;
