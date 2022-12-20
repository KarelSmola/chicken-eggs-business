import { Fragment } from "react";
import ChickensSummary from "./ChickensSummary";
import AvailableChickens from "./AvailableChickens";

const Chickens = () => {
  return (
    <Fragment>
      <ChickensSummary />
      <AvailableChickens />
    </Fragment>
  );
};

export default Chickens;
