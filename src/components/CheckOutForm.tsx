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
        <p>{JSON.stringify(props.cart)}</p>
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
