import { Fragment, useState, useContext } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Chickens from "./components/Chickens/Chickens";
import Business from "./components/Business-logic/Business";
import PickuperContext from "./store/pickuper-ctx";
import "./variables.css";

function App() {
  const pickuperCtx = useContext(PickuperContext);
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [businessPageIsVisible, setBusinessPageIsVisible] = useState(false);

  const showCart = () => {
    setCartIsVisible(true);
  };

  const closeBackdrop = () => {
    setCartIsVisible(false);
  };

  const orderChickens = () => {
    setBusinessPageIsVisible(true);
    setCartIsVisible(false);
  };

  const backToOrder = () => {
    pickuperCtx.clearFinalData();
    setBusinessPageIsVisible(false);
  };

  return (
    <Fragment>
      {businessPageIsVisible ? (
        <Business onBackToOrder={backToOrder} back={backToOrder} />
      ) : (
        <Fragment>
          {cartIsVisible && (
            <Cart onOrder={orderChickens} onClose={closeBackdrop} />
          )}
          <Header onShowCart={showCart} />
          <main>
            <Chickens />
          </main>
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
