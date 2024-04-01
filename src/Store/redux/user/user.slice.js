import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    accessToken: null,
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        email: action.payload,
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
    setAccessToken: (state, action) => {
      return {
        ...state,
        accessToken: action.payload
      }
    }
  },
});

export const { login, logout, setUserInfo, setAccessToken } = userSlice.actions;

export default userSlice.reducer;