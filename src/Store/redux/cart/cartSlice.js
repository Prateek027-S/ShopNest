import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      return {
        ...state,
        cartItems: action.payload
      }
    }
  }
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;