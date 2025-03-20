import { useParams } from "react-router";

export default function EventDetail() {
  const params = useParams();
  return <h1>{params.id}</h1>;
}
