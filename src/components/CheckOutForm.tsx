import { useContext, useEffect, useState } from "react";
import { ApiRequester } from "../tools/ApiRequester";
import AppContext, { CartProps } from "../tools/AppContext";

interface CheckOutProps {
  cart: CartProps;
}

const formSubmit = async (
  e: React.FormEvent,
  apiRequester: ApiRequester,
  cart: CartProps,
  setPayStandLink: React.Dispatch<React.SetStateAction<string>>,
  setSoId: React.Dispatch<React.SetStateAction<number>>,
  setSoGuid: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  console.log(`submit`);
  const data = await apiRequester.postData(cart);
  console.log(data);
  setPayStandLink(
    `${process.env.REACT_APP_PAYSTAND_LINK}&extSalesOrderId=${data.soId}`
  );
  setSoId(data.soId);
  setSoGuid(data.soGuid);
  // TODO: reenable accordingly to proceed from shopify
  //window.parent.postMessage("complete", "*");
};

export default function CheckOutForm(props: CheckOutProps) {
  const { apiRequester, setPayStandLink, setSoId, setSoGuid } =
    useContext(AppContext);
  const [selectedCsgRep, setSelectedCsgRep] = useState("");

  return (
    <div className="form-container">
      <div className="form-header-container">
        <h2>Review & Add Notes</h2>
      </div>
      <form
        className="form-body-container"
        onSubmit={(e) => {
          e.preventDefault();
          formSubmit(
            e,
            apiRequester,
            props.cart,
            setPayStandLink,
            setSoId,
            setSoGuid
          );
        }}
      >
        {/*
        {props.cart.items.map((item, index) => (
          <p key={index}>
            {item.product_title} (x {item.quantity} @ $
            {item.discounted_price / 100} ea.) = ${item.line_price / 100}
          </p>
        ))}
        <p>
          Shipping = {props.cart.shipping_method} ${" "}
          {props.cart.shipping_price / 100}
        </p>
            <p>Estimated Taxes = $ {props.cart.tax_price / 100}</p>*/}
        <div className="form-input-container">
          <label
            className="form-label"
            htmlFor="vzrepemail-id"
          >
            Verizon Rep Email
          </label>
          <input
            type="text"
            className="form-input"
            name="vzrepemail"
            id="vzrepemail-id"
          />
        </div>
        <div className="form-input-container">
          <label
            className="form-label"
            htmlFor="csgrep-id"
          >
            CSG Rep
          </label>
          <select
            id="csgrep-id"
            name="csgrep"
            className="form-input"
            defaultValue={selectedCsgRep}
            onChange={(e) => setSelectedCsgRep(e.target.value)}
          >
            <option
              disabled
              value=""
              hidden
            ></option>
          </select>
        </div>
        <div className="form-input-container">
          <label
            className="form-label"
            htmlFor="specialnotes-id"
          >
            Additional Notes
          </label>
          <textarea
            className="form-input"
            name="specialnotes"
            rows={4}
          />
        </div>
        <button className="form-submit-button">Proceed</button>
      </form>
    </div>
  );
}
