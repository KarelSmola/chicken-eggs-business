import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Chickens from "./components/Chickens/Chickens";
import ChickensCartContextProvider from "./store/ChickensCartContextProvider";
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

  return (
    <ChickensCartContextProvider>
      {businessPageIsVisible ? (
        <Business />
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
    </ChickensCartContextProvider>
  );
}

export default App;
