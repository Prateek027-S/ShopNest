import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";


const getAccessToken = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return token;
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    accessToken: getAccessToken(),
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
  },
  reducers: {
    login: (state, action) => {
      const {inputEmail} = action.payload;
      return {
        ...state,
        email: inputEmail,
      };
    },
    logout: state => {
      return {
        ...state,
        accessToken: null,
      };
    },
    setUserInfo: (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        mobile: action.payload.phone,
        address: action.payload.address,
      };
    },
  },
});

export const { login, logout, setUserInfo } = userSlice.actions;

export default userSlice.reducer;