import { useContext, useEffect } from "react";
import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
import ErrorWindow from "./components/ErrorWindow";
import PayStand from "./components/PayStand";
import PopupWindow from "./components/PopupWindow";
import AppContext, { AppContextProvider } from "./tools/AppContext";

const SHOPIFY_SITE = "https://csg-wcp.myshopify.com";

function App() {
  const {
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    loadingMessage,
    setLoadingMessage,
    isLoading,
    setIsLoading,
    apiRequester,
    cart,
    setCart,
    payStandLink,
    isOrderComplete,
  } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.origin === SHOPIFY_SITE) {
        setCart(e.data);
      }
    });
  }, []);

  useEffect(() => {
    if (isOrderComplete === true) {
      alert("order completed");
    }
  }, [isOrderComplete]);

  return (
    <div className="App">
      {isError && <ErrorWindow message={errorMessage} />}
      {isLoading && <PopupWindow message={loadingMessage} />}
      {payStandLink ? <PayStand /> : <CheckOutForm cart={cart} />}
    </div>
  );
}

export default () => {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
};
