import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const inititalemailState = {
  emails: [],
  inboxEmails: [],
  error: null,
  status: "idle",
  unReadEmails: 0,
};

export const fetchMail = createAsyncThunk(
  "emails/fetchMail",
  async (userEmail) => {
    try {
     
      // const response = await axios.get(
      //   `${process.env.REACT_APP_FIREBASE_URL}email.json`
      // );
      const response = await axios.get(`http://localhost:5000/user/sent/${userEmail}`);
      console.log('response from the sent inbox' , response);
      if (response.data) {
        const emailArray = Object.keys(response.data).map((key) => {
          return {
            id: key,
            ...response.data[key],
          };
        });
        const senderEmail = emailArray.filter((email) => {
          return email.sender === userEmail;
        });
        // console.log("sender email" ,senderEmail)
        return senderEmail;
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchInbox = createAsyncThunk("fetchInbox", async (emailId) => {

  try {
    // const response = await axios.get(
    //   `${process.env.REACT_APP_FIREBASE_URL}email.json`
    // );
    // console.log(response.data);
    const response = await axios.get(`http://localhost:5000/user/inbox/${emailId}`);
    // const emailsArray = Object.keys(response.data).map((key) => {
    //   return {
    //     id: key,
    //     ...response.data[key],
    //   };
    // });
    // const inboxMails = emailsArray.filter((email) => {
    //   console.log(email.recipient, "===>this is email", emailId);
    //   return email.recipient === emailId;
    // });
   const inboxMails = response.data
    return inboxMails;
  } catch (err) {
    console.log(err);
  }

});
// export const setReadMail = createAsyncThunk("setReadMail", async (id) => {
//   try {
//     const response = await axios.patch(
//       `${process.env.REACT_APP_FIREBASE_URL}email/${id}.json`,
//       { readMail: true }
//     );
//     console.log("from setreammails", response);
//   } catch (err) {
//     console.log(err);
//   }
// });
export const deleteMail = createAsyncThunk("deleteMail", async (id) => {
  try {
    console.log("starting of delete Mail");
    // const response = await axios.delete(
    //   `${process.env.REACT_APP_FIREBASE_URL}email/${id}.json`
    // );
    const response = axios.delete(`http://localhost:5000/user/inbox/remove/${id}`);
    console.log(response.data, "from delteMail");
    console.log("ending of delete mail", id);
    return id;
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
      console.log('fectbox fullfield')
      state.unReadEmails = action.payload.reduce((acc, total) => {
        return acc + (total.readMail === false);
      }, 0);
      console.log(state.unReadEmails, "unread message");
    });
    builder.addCase(fetchInbox.pending, (state, action) => {
      state.status = "pending";
      // state.error = action.error.message;
    });
    builder.addCase(deleteMail.fulfilled, (state, action) => {
      console.log("id", action.payload);
      const oldEmails = [...state.inboxEmails];
      console.log("odl mails", oldEmails);
      const newEmails = oldEmails.filter((email) => {
        console.log(email.id, "<==>", action.payload);
        return email.id !== action.payload;
      });
      state.inboxEmails = newEmails;
      console.log("new emails", state.emails);
    });
    builder.addCase(deleteMail.rejected, (state, action) => {
      console.log("rejected", action.payload);
    });
  },
});

export const emailActions = emailSlice.actions;
export default emailSlice.reducer;
