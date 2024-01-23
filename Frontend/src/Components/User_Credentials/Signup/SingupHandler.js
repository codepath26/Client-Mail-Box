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
    const response = await axios.post('http://localhost:5000/user/add-user' , user);
    console.log("this is the data from ",  response);
    localStorage.setItem('email' , response.data.email );

  } catch (err) {
    console.log("this is the error" , err);
    throw new Error(err.response.data.error.message);
  }
}

export default sendRequest;
