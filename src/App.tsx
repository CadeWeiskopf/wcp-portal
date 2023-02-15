import { useContext, useEffect } from "react";
import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
import PopupWindow from "./components/PopupWindow";
import AppContext, { AppContextProvider } from "./tools/AppContext";

function App() {
  const {
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
      await apiRequester.getData();
    }
    getData();
  }, []);

  return (
    <div className="App">
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
