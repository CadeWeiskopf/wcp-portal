const formSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(`submit`);
};

export default function CheckOutForm() {
  return (
    <div className="form-container">
      <div className="form-header-container">
        <h2>FORM</h2>
      </div>
      <form
        className="form-body-container"
        onSubmit={formSubmit}
      >
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
