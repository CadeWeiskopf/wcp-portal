import React, { useState } from "react";
import { ApiRequester } from "./ApiRequester";

interface AppContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingMessage: string;
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>;
  apiRequester: ApiRequester;
}

const AppContext = React.createContext<AppContextProps>({
  isLoading: false,
  setIsLoading: () => {},
  loadingMessage: "",
  setLoadingMessage: () => {},
  apiRequester: new ApiRequester(),
});

function AppContextProvider(props: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [apiRequester] = useState<ApiRequester>(new ApiRequester());
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadingMessage,
        setLoadingMessage,
        apiRequester,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext as default };
