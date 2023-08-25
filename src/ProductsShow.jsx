/* eslint-disable react/prop-types */
export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <form onSubmit={handleSubmit}>
        <h1>Edit product information</h1>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="number" step="0.01" />
        </div>
        <div>
          Height: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Delete product</button>
    </div>
  );
}
