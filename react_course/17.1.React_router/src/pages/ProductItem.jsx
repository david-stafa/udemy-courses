import { useParams } from "react-router-dom";

export default function ProductItem() {
    // params returs object with key defined in react router - /products/:id - the key is id
    const params = useParams();

  return <h1>{params.id}</h1>;
}
