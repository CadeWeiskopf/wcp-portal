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
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === SHOPIFY_SITE) {
        setCart(e.data);
      }
    };
    window.addEventListener("message", handleMessage);

    const handleHeightResive = () => {
      console.log(`resize ${document.body.scrollHeight}px`);
    };
    window.addEventListener("resize", handleHeightResive);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", handleHeightResive);
    };
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
