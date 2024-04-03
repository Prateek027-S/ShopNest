import { createSlice } from "@reduxjs/toolkit";



export const orderHistorySlice = createSlice({
  name: "orderHistorySlice",
  initialState: {
    orderHistory: []
  },
  reducers: {
    setOrderHistory: (state, action) => {
      const {newOrderHistory} = action.payload;
      return {
          ...state,
          orderHistory: newOrderHistory
      }

    }
  },
});

export const { setOrderHistory } = orderHistorySlice.actions;

export default orderHistorySlice.reducer;