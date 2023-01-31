import React from "react";
import SingleChicken from "./SingleChicken";

import classes from "./AvailableChickens.module.css";

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

const AvailableChickens = () => {
  return (
    <section className={classes.chickens}>
      <div className={classes["chickens-columns-title"]}>
        <p className={classes.type}>Type</p>
        <p className={classes.description}>Description</p>
        <p className={classes.eggs}>Eggs per day</p>
        <p className={classes.price}>Price</p>
        <p className={classes.add}>Add to cart</p>
      </div>
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
