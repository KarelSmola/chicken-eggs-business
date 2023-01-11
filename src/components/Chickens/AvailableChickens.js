import React from "react";

import classes from "./AvailableChickens.module.css";
import SingleChicken from "./SingleChicken";

const CHICKENS = [
  {
    id: "ch-01",
    type: "Brown Chicken",
    description: "The best chicken",
    eggsPerDay: 2,
    price: 10,
    eggRetailPrice: 0.5,
  },
  {
    id: "ch-02",
    type: "Yellow Chicken",
    description: "Good chicken",
    eggsPerDay: 3,
    price: 5,
    eggRetailPrice: 0.3,
  },
  {
    id: "ch-03",
    type: "Black Chicken",
    description: "Still good",
    eggsPerDay: 5,
    price: 3,
    eggRetailPrice: 0.2,
  },
  {
    id: "ch-04",
    type: "White Chicken",
    description: "Chicken Guardian",
    eggsPerDay: 0,
    price: 20,
    eggRetailPrice: 0,
  },
];

const AvailableChickens = () => {
  return (
    <section className={classes.chickens}>
      <ul className={classes["chickens-list"]}>
        {CHICKENS.map((chicken) => (
          <li key={chicken.id}>
            <SingleChicken
              id={chicken.id}
              type={chicken.type}
              description={chicken.description}
              eggsPerDay={chicken.eggsPerDay}
              price={chicken.price}
              eggRetailPrice={chicken.eggRetailPrice}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableChickens;
