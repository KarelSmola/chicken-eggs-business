import React from "react";

const ChickenCartContext = React.createContext({
  totalChickensPrice: 0,
  chickensInCart: [],
  addChicken: (chicken) => {},
  removeChicken: (chickenId) => {},
  theoryEggsPerDaySum: "",
  totalChickensAmunt: "",
  theoryDayRevenueSum: "",
});

export default ChickenCartContext;
