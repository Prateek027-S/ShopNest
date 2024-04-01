import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from './order/orderSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import api from "../../Network/api";


const reducers = combineReducers({
  api: api.reducer,
  userSlice: userReducer,
  cartSlice: cartReducer,
  orderSlice: orderReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

export const persistedReducer = persistReducer(persistConfig, reducers);