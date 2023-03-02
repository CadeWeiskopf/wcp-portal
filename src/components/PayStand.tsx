import { useContext, useEffect } from "react";
import AppContext from "../tools/AppContext";

export default function PayStand() {
  const { payStandLink } = useContext(AppContext);

  /*useEffect(() => {
    const iframe = document.getElementById(
      "paystand-iframe-id"
    ) as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          const message = (mutation.target as HTMLElement).innerText;
          if (
            message.includes("Thank you.") &&
            message.includes("This payment is now settled.")
          ) {
            alert("Payment settled.");
            observer.disconnect();
          }
        });
      });
      observer.observe(iframe.contentWindow.document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
      console.log("observing");
    }
  }, []);*/

  return (
    <iframe
      id="paystand-iframe-id"
      className="paystand-iframe"
      src={payStandLink}
    />
  );
}
