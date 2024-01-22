import { createSlice } from "@reduxjs/toolkit";
const localToken  = localStorage.getItem('token');
const authInitialState = {
  token : localToken || '',
  userIsLoggedIn : !!localToken,
}
const authSlice = createSlice({
  name : "Authentication",
  initialState : authInitialState,
  reducers  :{
    login (state , action){
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.userIsLoggedIn = true;
    },
    logout ( state , action){
      state.token  = null;
      state.userIsLoggedIn = false;
      localStorage.removeItem('token');

    },
    updateProfile ( state , action){
        console.log(action.payload);
    },
  }
});

export const  authAction= authSlice.actions;
export default authSlice.reducer;