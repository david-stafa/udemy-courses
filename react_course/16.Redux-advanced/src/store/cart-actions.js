import { cartActions } from "./cart";
import { uiActions } from "./ui";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://learning-redux-40d6a-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data succesfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed.",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://learning-redux-40d6a-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        return new Error("Could not fetch cart data.");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cart: cartData.cart || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      console.log(cartData);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed.",
        })
      );
    }
  };
};
