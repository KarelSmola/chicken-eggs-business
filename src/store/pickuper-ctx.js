import React from "react";

const PickuperContext = React.createContext({
  pickupers: [],
  addPickuper: (pickuper) => {},
  removePickuper: (id) => {},
  productiveDays: "",
  calcPickuperData: () => {},
  theoryEggsPerMonth: "",
  theoryMonthRevenue: "",
  calcROI: () => {},
  calcData: [],
  calcFinalData: false,
  finalData: {},
  calcMessage: "",
  clearFinalData: () => {},
});

export default PickuperContext;
