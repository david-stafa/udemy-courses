import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { formatCurrency } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleCheckoutOpen() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            id={item.id}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{formatCurrency(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length !== 0 && (
          <Button
            disabled={cartCtx.items.length === 0}
            onClick={handleCheckoutOpen}
          >
            Go to checkout
          </Button>
        )}
      </p>
    </Modal>
  );
}
