import axios from "axios";

async function sendRequest(user) {
  try {
    console.log("sendrequest from t he loding handler");
    // const response = await axios.post(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    //   user
    // );
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login` ,user);
    // console.log("this is the data",response.data);
    // localStorage.setItem('token' , response.data.idToken);
    console.log("this isthe login data" , response.data.user.email);
    localStorage.setItem('email', response.data.user.email);
    return response.data;
  } catch (err) {
    console.log(err.response.data.message , 'error from the login front')
    throw new Error(err.response.data.message);
  }
}

export default sendRequest;
