import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Chickens from "./components/Chickens/Chickens";
import ChickensCartContextProvider from "./store/ChickensCartContextProvider";
import PickupersContextProvider from "./store/PickupersContextProvider";
import Business from "./components/Business-logic/Business";

function App() {
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
    setBusinessPageIsVisible(false);
  };

  return (
    <ChickensCartContextProvider>
      <PickupersContextProvider>
        {businessPageIsVisible ? (
          <Business onBackToOrder={backToOrder} />
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
      </PickupersContextProvider>
    </ChickensCartContextProvider>
  );
}

export default App;
