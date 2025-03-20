import { Link } from "react-router-dom";

const products = [
  {
    id: "p1",
    name: "product 1",
  },
  {
    id: "p2",
    name: "product 2",
  },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
