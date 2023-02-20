import { useContext, useEffect } from "react";
import { ApiRequester } from "../tools/ApiRequester";
import AppContext, { CartProps } from "../tools/AppContext";

interface CheckOutProps {
  cart: CartProps;
}

const formSubmit = async (e: React.FormEvent, apiRequester: ApiRequester) => {
  e.preventDefault();
  console.log(`submit`);
  window.parent.postMessage("complete", "*");
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
        onSubmit={(e) => formSubmit(e, apiRequester)}
      >
        {props.cart.items.map((item, index) => (
          <p key={index}>
            {item.product_title} (x {item.quantity})
          </p>
        ))}
        <input
          type="text"
          placeholder="test"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
