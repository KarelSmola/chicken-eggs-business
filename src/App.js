import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Chickens from "./components/Chickens/Chickens";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Chickens />
      </main>
    </Fragment>
  );
}

export default App;
