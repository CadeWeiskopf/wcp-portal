import { useContext, useEffect } from "react";
import AppContext from "../tools/AppContext";

export default function PayStand() {
  const { payStandLink, apiRequester } = useContext(AppContext);

  useEffect(() => {
    const checkIsPaid = () => {
      apiRequester.isPaid;
    };
  }, []);

  return (
    <iframe
      id="paystand-iframe-id"
      className="paystand-iframe"
      src={payStandLink}
    />
  );
}
