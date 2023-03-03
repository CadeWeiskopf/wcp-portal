import { useContext } from "react";
import AppContext from "../tools/AppContext";

export default function PayStand() {
  const { payStandLink } = useContext(AppContext);

  return (
    <iframe
      id="paystand-iframe-id"
      className="paystand-iframe"
      src={payStandLink}
    />
  );
}
