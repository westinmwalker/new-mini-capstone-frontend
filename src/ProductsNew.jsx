export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="number" step="0.01" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">Create photo</button>
      </form>
    </div>
  );
}
