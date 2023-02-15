import { useContext, useEffect } from "react";
import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
import ErrorWindow from "./components/ErrorWindow";
import PopupWindow from "./components/PopupWindow";
import AppContext, { AppContextProvider } from "./tools/AppContext";

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
  } = useContext(AppContext);

  useEffect(() => {
    async function getData() {
      setLoadingMessage("Getting data...");
      setIsLoading(true);
      try {
        const response = await apiRequester.getData();
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
        if (e instanceof Error) {
          setErrorMessage(`${e.message}  Please refresh and try again.`);
        } else {
          setErrorMessage("Unexpected error. Please refresh and try again.");
        }
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      {isError && <ErrorWindow message={errorMessage} />}
      {isLoading && <PopupWindow message={loadingMessage} />}
      <CheckOutForm />
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
