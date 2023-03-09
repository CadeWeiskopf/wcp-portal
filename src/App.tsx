import { useContext, useEffect } from "react";
import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
import ErrorWindow from "./components/ErrorWindow";
import PayStand from "./components/PayStand";
import PopupWindow from "./components/PopupWindow";
import AppContext, { AppContextProvider, SalesRep } from "./tools/AppContext";

export const SHOPIFY_SITE = "https://csg-wcp.myshopify.com";

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
    setSalesReps,
  } = useContext(AppContext);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === SHOPIFY_SITE) {
        setCart(e.data);
      }
    };
    window.addEventListener("message", handleMessage);

    const postWindowHeight = () => {
      const formContainer = document.getElementsByClassName(
        "form-container"
      )[0] as HTMLElement;
      if (!formContainer) {
        return;
      }
      window.parent.postMessage(
        { windowHeight: `${formContainer.offsetHeight}px` },
        SHOPIFY_SITE
      );
    };
    postWindowHeight();
    const handleHeightResize = () => {
      postWindowHeight();
    };
    window.addEventListener("resize", handleHeightResize);

    const getData = async () => {
      const data = await apiRequester.getSalesReps();
      setSalesReps(data);
    };
    getData();

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", handleHeightResize);
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
      {/*isLoading && <PopupWindow message={loadingMessage} />*/}
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
