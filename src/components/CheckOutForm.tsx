import { useContext, useEffect } from "react";
import { ApiRequester } from "../tools/ApiRequester";
import AppContext, { CartProps } from "../tools/AppContext";

interface CheckOutProps {
  cart: CartProps;
}

const formSubmit = async (
  e: React.FormEvent,
  apiRequester: ApiRequester,
  cart: CartProps
) => {
  e.preventDefault();
  console.log(`submit`);
  const data = await apiRequester.postData(cart);
  console.log(data);
  // TODO: reenable accordingly to proceed from shopify
  //window.parent.postMessage("complete", "*");
};

export default function CheckOutForm(props: CheckOutProps) {
  const { apiRequester } = useContext(AppContext);
  return (
    <div className="form-container">
      <div className="form-header-container">
        <h2>FORM</h2>
      </div>
      <form
        className="form-body-container"
        onSubmit={(e) => {
          e.preventDefault();
          formSubmit(e, apiRequester, props.cart);
        }}
      >
        {props.cart.items.map((item, index) => (
          <p key={index}>
            {item.product_title} (x {item.quantity})
          </p>
        ))}
        <input
          type="email"
          name="vzrepemail"
          placeholder="VZ Rep Email"
        />
        <select name="csgrep">
          <option
            defaultValue=""
            disabled
            selected
            hidden
          >
            If applicable, select CSG Sales Rep.
          </option>
        </select>
        <textarea
          name="specialnotes"
          placeholder="Special notes"
          rows={4}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
