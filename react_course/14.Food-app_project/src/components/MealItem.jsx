import { useContext } from "react";
import { formatCurrency } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ name, image, price, description, id }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    const meal = { name, image, price, description, id };
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{formatCurrency(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => handleAddMealToCart()}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
