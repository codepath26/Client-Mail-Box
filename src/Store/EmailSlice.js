import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const inititalemailState = {
  emails : [],
  error : null,
  status : "idle"
}


export const fetchMail = createAsyncThunk('emails/fetchMail' , async()=>{
  try{
     
    const response = await axios.get(`${process.env.REACT_APP_FIREBASE_URL}email.json`);
    if(response.data){

      const emailArray = Object.keys(response.data).map((key)=>{
        return {
          id : key,
          ...response.data[key],
        }
      });
      return emailArray;
    }else{
      return [];
    }
  
}catch(err){
  console.log(err);
  return err;
}

});

export const emailSlice = createSlice({
  name : "emails",
  initialState : inititalemailState,
  reducers : {
    fetchEmailFullfilled : (state , action)=>{
      state.status = "Succeeded";
      state.emails = action.payload;
    },
    fetchEmailRejected : (state ,action)=>{
      state.status = "Failed";
      state.emails = action.payload;
    },
  },
  extraReducers  :(builder)=>{
    builder.addCase(fetchMail.pending,(state ,action)=>{
      state.status = "Panding";
    });
    builder.addCase(fetchMail.fulfilled,(state, action)=>{
      state.status = "Succeeded";
      console.log(action.payload ,"payload");
      state.emails = action.payload;
    });
    builder.addCase(fetchMail.rejected , (state , action)=>{
      state.status = "Failed";
      state.error = action.error.message;
    })
  },
})

export const emailActions = emailSlice.actions;
export default emailSlice.reducer;