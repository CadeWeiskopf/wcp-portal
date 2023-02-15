import React, { useState } from "react";
import { ApiRequester } from "./ApiRequester";

interface ItemProps {
  product_title: string;
  quantity: number;
}

export interface CartProps {
  items: ItemProps[];
}

interface AppContextProps {
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingMessage: string;
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>;
  apiRequester: ApiRequester;
  cart: CartProps;
  setCart: React.Dispatch<React.SetStateAction<CartProps>>;
}

const AppContext = React.createContext<AppContextProps>({
  isError: false,
  setIsError: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  isLoading: false,
  setIsLoading: () => {},
  loadingMessage: "",
  setLoadingMessage: () => {},
  apiRequester: new ApiRequester(),
  cart: { items: [{ product_title: "null", quantity: 0 }] },
  setCart: () => {},
});

function AppContextProvider(props: any) {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [apiRequester] = useState<ApiRequester>(new ApiRequester());
  const [cart, setCart] = useState<CartProps>({
    items: [{ product_title: "null", quantity: 0 }],
  });
  return (
    <AppContext.Provider
      value={{
        isError,
        setIsError,
        errorMessage,
        setErrorMessage,
        isLoading,
        setIsLoading,
        loadingMessage,
        setLoadingMessage,
        apiRequester,
        cart,
        setCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext as default };
