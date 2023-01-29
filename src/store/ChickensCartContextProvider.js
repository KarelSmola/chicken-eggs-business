import { useReducer } from "react";
import ChickenCartContext from "./chicken-cart";

const CHICKENS = [
  {
    id: "ch-01",
    type: "Rhode Island Red",
    description: "The most popular in US",
    eggsPerDay: 1,
    price: 10,
    eggRetailPrice: 0.5,
  },
  {
    id: "ch-02",
    type: "Plymouth Rock",
    description: "Relaxed, resplendent and responsive",
    eggsPerDay: 1,
    price: 5,
    eggRetailPrice: 0.3,
  },
  {
    id: "ch-03",
    type: "The Australorp",
    description: "Holds the record for the most eggs ever",
    eggsPerDay: 2,
    price: 3,
    eggRetailPrice: 0.2,
  },
  {
    id: "ch-04",
    type: "Orpington",
    description: "UK Chicken Guardian",
    eggsPerDay: 0,
    price: 20,
    eggRetailPrice: 0,
  },
];

const initialState = {
  totalChickensPrice: 0,
  chickensInCart: [],
};

const chickenCartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingChickenIndex = state.chickensInCart.findIndex(
      (chicken) => chicken.id === action.chicken.id
    );

    const existingChicken = state.chickensInCart[existingChickenIndex];

    const availableChickensIndex = CHICKENS.findIndex(
      (chicken) => chicken.id === action.chicken.id
    );

    const availableChickens = CHICKENS[availableChickensIndex];

    const updatedTotalChickensPrice =
      state.totalChickensPrice +
      action.chicken.amount * availableChickens.price;

    let updatedChicken;
    let updatedChickens;

    if (existingChicken) {
      updatedChicken = {
        ...existingChicken,
        amount: existingChicken.amount + action.chicken.amount,
        price:
          existingChicken.price +
          availableChickens.price * action.chicken.amount,
        eggsPerDay:
          existingChicken.eggsPerDay +
          availableChickens.eggsPerDay * action.chicken.amount,
        eggRetailPrice:
          existingChicken.eggRetailPrice + action.chicken.eggRetailPrice,
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

    const availableChickensIndex = CHICKENS.findIndex(
      (chicken) => chicken.id === action.chickenId
    );

    const availableChickens = CHICKENS[availableChickensIndex];

    const updatedTotalChickensPrice = +(
      state.totalChickensPrice - availableChickens.price
    ).toFixed(2);

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
        price: existingChicken.price - availableChickens.price,
        eggsPerDay: existingChicken.eggsPerDay - availableChickens.eggsPerDay,
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

  // const chickenTheoryEggsPerDay = cartState.chickensInCart.reduce(
  //   (acc, curr) => acc + curr.amount * curr.eggsPerDay,
  //   0
  // );

  // console.log(chickenTheoryEggsPerDay);

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

  const theoryDayRevenueSum = chickensWithoutWhiteChicken.reduce(
    (acc, curr) => {
      return acc + curr.eggRetailPrice;
    },
    0
  );

  const initial = {
    totalChickensPrice: cartState.totalChickensPrice.toFixed(2),
    chickensInCart: cartState.chickensInCart,
    addChicken: addChickenToCart,
    removeChicken: removeChickenFromCart,
    theoryEggsPerDaySum,
    totalChickensAmunt,
    theoryDayRevenueSum,
    availableChickens: CHICKENS,
  };

  return (
    <ChickenCartContext.Provider value={initial}>
      {props.children}
    </ChickenCartContext.Provider>
  );
};

export default ChickensCartContextProvider;
