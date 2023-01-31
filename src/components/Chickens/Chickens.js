import { Fragment } from "react";
import ChickensIntro from "./ChickensIntro";
import AvailableChickens from "./AvailableChickens";

const Chickens = () => {
  return (
    <Fragment>
      <ChickensIntro />
      <AvailableChickens />
    </Fragment>
  );
};

export default Chickens;
