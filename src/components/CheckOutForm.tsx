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
        <h2>FORM</h2>
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
        <p>Estimated Taxes = $ {props.cart.tax_price / 100}</p>
        <input
          type="email"
          className="form-input"
          name="vzrepemail"
          placeholder="VZ Rep Email"
        />
        <select
          name="csgrep"
          className="form-input"
          defaultValue={selectedCsgRep}
          onChange={(e) => setSelectedCsgRep(e.target.value)}
        >
          <option
            disabled
            value=""
            hidden
          >
            If applicable, select CSG Sales Rep.
          </option>
        </select>
        <textarea
          className="form-input"
          name="specialnotes"
          placeholder="Special notes"
          rows={4}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
