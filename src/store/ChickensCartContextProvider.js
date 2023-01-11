import { useReducer } from "react";
import ChickenCartContext from "./chicken-cart";

const initialState = {
  totalChickensPrice: 0,
  chickensInCart: [],
};

const chickenCartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalChickensPrice =
      state.totalChickensPrice + action.chicken.amount * action.chicken.price;

    const existingChickenIndex = state.chickensInCart.findIndex(
      (chicken) => chicken.id === action.chicken.id
    );

    const existingChicken = state.chickensInCart[existingChickenIndex];

    let updatedChicken;
    let updatedChickens;

    if (existingChicken) {
      updatedChicken = {
        ...existingChicken,
        amount: existingChicken.amount + action.chicken.amount,
      };
      updatedChickens = [...state.chickensInCart];
      updatedChickens[existingChickenIndex] = updatedChicken;
    } else {
      updatedChickens = state.chickensInCart.concat(action.chicken);
    }

    return {
      chickensInCart: updatedChickens,
      totalChickensPrice: updatedTotalChickensPrice,
    };
  }

  if (action.type === "REMOVE") {
    const existingChickenIndex = state.chickensInCart.findIndex(
      (chicken) => chicken.id === action.chickenId
    );
    const existingChicken = state.chickensInCart[existingChickenIndex];

    const updatedTotalChickensPrice =
      state.totalChickensPrice - existingChicken.price;

    let updatedChicken;
    let updatedChickens;

    if (existingChicken.amount === 1) {
      updatedChickens = state.chickensInCart.filter(
        (chicken) => chicken.id !== action.chickenId
      );
    } else {
      updatedChicken = {
        ...existingChicken,
        amount: existingChicken.amount - 1,
      };
      updatedChickens = [...state.chickensInCart];
      updatedChickens[existingChickenIndex] = updatedChicken;
    }

    return {
      chickensInCart: updatedChickens,
      totalChickensPrice: updatedTotalChickensPrice,
    };
  }

  return initialState;
};

const ChickensCartContextProvider = (props) => {
  const [cartState, dispatchChicken] = useReducer(
    chickenCartReducer,
    initialState
  );

  const addChickenToCart = (chicken) => {
    dispatchChicken({ type: "ADD", chicken: chicken });
  };

  const removeChickenFromCart = (chickenId) => {
    dispatchChicken({ type: "REMOVE", chickenId: chickenId });
  };

  const theoryEggsPerDaySum = cartState.chickensInCart.reduce(
    (acc, curr) => acc + curr.eggsPerDay,
    0
  );

  const totalChickensAmunt = cartState.chickensInCart.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const chickensWithoutWhiteChicken = cartState.chickensInCart.filter(
    (chicken) => chicken.eggsPerDay !== 0
  );

  const theoryDayRevenue = chickensWithoutWhiteChicken.reduce((acc, curr) => {
    const oneChickenRevenue = curr.amount * curr.eggsPerDay * curr.eggRetailPrice;
    return acc + oneChickenRevenue;
  }, 0);

  const initial = {
    totalChickensPrice: cartState.totalChickensPrice,
    chickensInCart: cartState.chickensInCart,
    addChicken: addChickenToCart,
    removeChicken: removeChickenFromCart,
    theoryEggsPerDaySum: theoryEggsPerDaySum,
    totalChickensAmunt,
    theoryDayRevenue: theoryDayRevenue.toFixed(2),
  };

  return (
    <ChickenCartContext.Provider value={initial}>
      {props.children}
    </ChickenCartContext.Provider>
  );
};

export default ChickensCartContextProvider;
