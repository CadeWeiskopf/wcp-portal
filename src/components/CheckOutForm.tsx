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
      <div className="form-body-container">
        <form onSubmit={formSubmit}>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
