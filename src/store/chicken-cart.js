import React from "react";

const ChickenCartContext = React.createContext({
  totalChickensPrice: 0,
  chickensInCart: [],
  addChicken: (chicken) => {},
  removeChicken: (chickenId) => {},
  theoryEggsPerDaySum: "",
  totalChickensAmunt: "",
  theoryDayRevenue: "",
});

export default ChickenCartContext;
