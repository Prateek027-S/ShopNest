import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from './order/orderSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";


const reducers = combineReducers({
  userSlice: userReducer,
  cartSlice: cartReducer,
  orderSlice: orderReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

export const persistedReducer = persistReducer(persistConfig, reducers);