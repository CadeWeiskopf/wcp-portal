import { useContext, useEffect } from "react";
import AppContext from "../tools/AppContext";

export default function PayStand() {
  const { payStandLink, apiRequester, soId, soGuid } = useContext(AppContext);

  useEffect(() => {
    const checkIsPaid = () => {
      if (!apiRequester.isPaid(soId, soGuid)) {
        return;
      }
    };
    const intervalId = setInterval(checkIsPaid, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <iframe
      id="paystand-iframe-id"
      className="paystand-iframe"
      src={payStandLink}
    />
  );
}
