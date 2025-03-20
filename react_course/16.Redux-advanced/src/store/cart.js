import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cart: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cart = action.payload.cart;
    },

    addItem(state, action) {
      const item = { ...action.payload };

      state.totalQuantity++;
      state.changed = true;

      const itemIndex = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );

      if (itemIndex === -1) {
        state.cart.push({ ...item, quantity: 1 });
      } else if (itemIndex >= 0) {
        state.cart[itemIndex].quantity++;
      }
    },

    removeItem(state, action) {
      const cart = state.cart;
      const itemIndex = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      state.totalQuantity--;
      state.changed = true;
      if (cart[itemIndex].quantity === 1) {
        state.cart.splice(itemIndex, 1);
      } else if (cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
