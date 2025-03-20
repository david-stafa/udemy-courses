import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // creates a copy - common approach
    const updatedItems = [...state.items];

    // update items array in imutable way
    if (existingCartIndex > -1) {
      const existingItem = state.items[existingCartIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      // remove item in array
      // remove 1 item at existingCartIndex
      updatedItems.splice(existingCartIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    console.log(state);
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
