import { useContext, useEffect } from "react";
import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
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
      await apiRequester.getData();
    }
    getData();
  }, []);

  return (
    <div className="App">
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
