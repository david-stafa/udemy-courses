import { useContext } from "react";
import CartContext from "../store/CartContext";
import { formatCurrency } from "../util/formatting";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { useActionState } from "react";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  const cartTotalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  // form actions recieves prevState as first parameter, formData are second parameter
  async function checkoutAction(prevState, formData) {
    // get the form data in an object
    const customerData = Object.fromEntries(formData.entries());

    const body = JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData,
      },
    });

    await sendRequest(body);
  }

  const [updatedFormState, formAction, isSending] = useActionState(
    checkoutAction,
    null
  );

  let actions = (
    <>
      {" "}
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully!</p>
        <p>
          We wiil get back to you with more details via email within next few
          minutes
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Ok</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>{formatCurrency(cartTotalPrice)}</p>
        <Input
          label="Full Name"
          type="text"
          id="name"
          defaultValue="David Stafa"
        />
        <Input
          label="E-Mail Address"
          type="email"
          id="email"
          defaultValue="ds@sez.cz"
        />
        <Input label="Street" type="text" id="street" defaultValue="Jugoasd" />
        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            defaultValue="12323"
          />
          <Input label="City" type="text" id="city" defaultValue="Ces Bro" />
        </div>

        {error && <Error message={error} title={"Something went wrong"} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
