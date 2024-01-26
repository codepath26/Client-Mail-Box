import axios from "axios";

async function sendRequest(user) {
  try {
    console.log("this")
    //  FIREBASE CONNECTION
    // const response = await axios.post(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    //   user
    // );

    //MONGODB CONNECTION
    // console.log(process.env.REACT_APP_BASE_URL , "this is the root url")
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/add-user` , user);
    // console.log("this is the data from ");
    localStorage.setItem('email' , response.data.email );

  } catch (err) {
    // console.log("this is the error" , err.response.data.message);
    throw new Error(err.response.data.message);
  }
}

export default sendRequest;
