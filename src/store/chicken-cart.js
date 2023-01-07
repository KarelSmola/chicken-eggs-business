import React from "react";

const ChickenCartContext = React.createContext({
  totalChickensPrice: 0,
  chickensInCart: [],
  addChicken: (chicken) => {},
  removeChicken: (chickenId) => {},
});

export default ChickenCartContext;
