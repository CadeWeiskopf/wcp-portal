import "./App.css";
import CheckOutForm from "./components/CheckOutForm";
import { AppContextProvider } from "./tools/AppContext";

function App() {
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
