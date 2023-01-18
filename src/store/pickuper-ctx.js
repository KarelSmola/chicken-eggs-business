import React from "react";

const PickuperContext = React.createContext({
  pickupers: [],
  addPickuper: (pickuper) => {},
  removePickuper: (id) => {},
  productiveDays: "",
  calcPickuperData: () => {},
  theoryEggsPerMonth: "",
  // realEggsPerDaySum: "",
  // realEggsPerMonthSum: "",
  theoryMonthRevenue: "",
  // realDayRevenueSum: "",
  // realMonthRevenueSum: "",
  calcROI: () => {},
  calcData: [],
  calcFinalData: false,
  finalData: {},
  calcMessage: "",
});

export default PickuperContext;
