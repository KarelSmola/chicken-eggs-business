import React, { useContext } from "react";
import ChickenCartContext from "../../store/chicken-cart";
import PickuperContext from "../../store/pickuper-ctx";
import classes from "./Pickuper.module.css";

const Pickuper = (props) => {
  const chickenCtx = useContext(ChickenCartContext);
  const pickuperCtx = useContext(PickuperContext);

  return (
    <li key={props.id} className={classes.pickuper}>
      <p>Pickuper {props.name}</p>
      <div className={classes["data-container"]}>
        {chickenCtx.chickensInCart.map((chicken) => {
          const theoryEggsPerMonth =
            chicken.eggsPerDay * pickuperCtx.productiveDays;
          const realEggsPerMonth = (
            chicken.eggsPerDay *
            pickuperCtx.productiveDays *
            (props.pickuperProductivity / 100)
          ).toFixed(0);

          return (
            <ul className={classes["data-list"]}>
              <li
                key={Math.random().toString()}
                className={classes["data-line"]}
              >
                <p>{theoryEggsPerMonth}</p>
                <p>{props.pickuperProductivity}</p>
                <p>{realEggsPerMonth}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </li>
  );
};

export default Pickuper;
