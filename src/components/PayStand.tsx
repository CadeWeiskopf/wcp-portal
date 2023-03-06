import { useContext, useEffect } from "react";
import { SHOPIFY_SITE } from "../App";
import AppContext from "../tools/AppContext";

export default function PayStand() {
  const { payStandLink, apiRequester, soId, soGuid, setIsOrderComplete } =
    useContext(AppContext);

  useEffect(() => {
    const checkIsPaid = async () => {
      const data = await apiRequester.isPaid(soId, soGuid);
      if (data.paid === true) {
        setIsOrderComplete(data.paid);
      }
    };
    const intervalId = setInterval(checkIsPaid, 1000);

    window.parent.postMessage({ windowHeight: `1000px` }, SHOPIFY_SITE);

    return () => {
      clearInterval(intervalId);
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
