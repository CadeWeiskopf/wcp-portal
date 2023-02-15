import React, { useState } from "react";

interface AppContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingMessage: string;
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = React.createContext<AppContextProps>({
  isLoading: false,
  setIsLoading: () => {},
  loadingMessage: "",
  setLoadingMessage: () => {},
});

function AppContextProvider(props: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, loadingMessage, setLoadingMessage }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext as default };
