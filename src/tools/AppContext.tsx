import React, { useState } from "react";
import { ApiRequester } from "./ApiRequester";

interface ItemProps {
  product_title: string;
  quantity: number;
  price: number;
  discounted_price: number;
  line_price: number;
}

export interface CartProps {
  items: ItemProps[];
  shipping_method: string;
  shipping_price: number;
  tax_price: number;
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
  payStandLink: string;
  setPayStandLink: React.Dispatch<React.SetStateAction<string>>;
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
  cart: {
    tax_price: 0,
    shipping_method: "null",
    shipping_price: 0,
    items: [
      {
        product_title: "null",
        quantity: 0,
        discounted_price: 0,
        line_price: 0,
        price: 0,
      },
    ],
  },
  setCart: () => {},
  payStandLink: "",
  setPayStandLink: () => {},
});

function AppContextProvider(props: any) {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [apiRequester] = useState<ApiRequester>(new ApiRequester());
  const [cart, setCart] = useState<CartProps>({
    tax_price: 0,
    shipping_method: "null",
    shipping_price: 0,
    items: [
      {
        product_title: "null",
        quantity: 0,
        discounted_price: 0,
        line_price: 0,
        price: 0,
      },
    ],
  });
  const [payStandLink, setPayStandLink] = useState<string>("");
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
        payStandLink,
        setPayStandLink,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext as default };
