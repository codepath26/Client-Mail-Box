import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const inititalemailState = {
  emails: [],
  inboxEmails: [],
  error: null,
  status: "idle",
};

export const fetchMail = createAsyncThunk("emails/fetchMail", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_FIREBASE_URL}email.json`
    );
    if (response.data) {
      const emailArray = Object.keys(response.data).map((key) => {
        return {
          id: key,
          ...response.data[key],
        };
      });
      return emailArray;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const fetchInbox = createAsyncThunk("fetchInbox", async (emailId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_FIREBASE_URL}email.json`
    );
    // console.log(response.data);
    const emailsArray = Object.keys(response.data).map((key) => {
      return {
        id: key,
        ...response.data[key],
      };
    });
    const inboxMails = emailsArray.filter((email) => {
      console.log(email.recipient, "===>this is email", emailId);
      return email.recipient === emailId;
    });

    return inboxMails;
  } catch (err) {
    console.log(err);
  }
});
export const setReadMail = createAsyncThunk("setReadMail", async (id) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_FIREBASE_URL}email/${id}.json`,
      {readMail : true}
    );
    console.log("from setreammails",response);
  } catch (err) {
    console.log(err);
  }
});
export const emailSlice = createSlice({
  name: "emails",
  initialState: inititalemailState,
  reducers: {
    fetchEmailFullfilled: (state, action) => {
      state.status = "Succeeded";
      state.emails = action.payload;
    },
    fetchEmailRejected: (state, action) => {
      state.status = "Failed";
      state.emails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMail.pending, (state, action) => {
      state.status = "Panding";
    });
    builder.addCase(fetchMail.fulfilled, (state, action) => {
      state.status = "Succeeded";
      console.log(action.payload, "payload");
      state.emails = action.payload;
    });
    builder.addCase(fetchMail.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchInbox.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchInbox.fulfilled, (state, action) => {
      state.status = "successed";
      state.inboxEmails = action.payload;
    });
    builder.addCase(fetchInbox.pending, (state, action) => {
      state.status = "pending";
      // state.error = action.error.message;
    });
  },
});

export const emailActions = emailSlice.actions;
export default emailSlice.reducer;
