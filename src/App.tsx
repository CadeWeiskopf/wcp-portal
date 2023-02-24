import { useContext, useEffect } from "react";
import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
import ErrorWindow from "./components/ErrorWindow";
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
  } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.origin === SHOPIFY_SITE) {
        setCart(e.data);
      }
    });
  }, []);

  return (
    <div className="App">
      {isError && <ErrorWindow message={errorMessage} />}
      {isLoading && <PopupWindow message={loadingMessage} />}
      <CheckOutForm cart={cart} />
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
