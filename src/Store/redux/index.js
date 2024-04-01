import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import cartReducer from './cart/cart.slice';
import orderReducer from './order/order.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import api from '../../Network/api';

const reducers = combineReducers({
  api: api.reducer,
  userSlice: userReducer,
  cartSlice: cartReducer,
  orderSlice: orderReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userSlice', 'cartSlice', 'orderSlice']
};

export const persistedReducer = persistReducer(persistConfig, reducers);
