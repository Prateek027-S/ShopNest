import { createSlice } from "@reduxjs/toolkit";



export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderItems: [],
    totalAmount: 0,
    orderHistory: []
  },
  reducers: {
    setOrderHistory: (state, action) => {
      const {newOrderItems, newTotalAmount, newOrderHistory} = action.payload;
        return {
            ...state,
            orderItems: newOrderItems,
            totalAmount: newTotalAmount,
            orderHistory: newOrderHistory
        }
    }
  },
});

export const { setOrderHistory } = orderSlice.actions;

export default orderSlice.reducer;