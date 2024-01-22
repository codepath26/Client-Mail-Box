import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth'
import EmailReducer from './EmailSlice'

const store = configureStore({
  reducer : {
    auth : AuthReducer,
    emails : EmailReducer,
  }
});

export default store;