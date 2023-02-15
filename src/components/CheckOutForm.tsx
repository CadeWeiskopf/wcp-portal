import { CartProps } from "../tools/AppContext";

interface CheckOutProps {
  cart: CartProps;
}

const formSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(`submit`);
};

export default function CheckOutForm(props: CheckOutProps) {
  return (
    <div className="form-container">
      <div className="form-header-container">
        <h2>FORM</h2>
      </div>
      <form
        className="form-body-container"
        onSubmit={formSubmit}
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
