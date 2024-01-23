require('dotenv').config();
const express = require('express');
const cors = require('cors');
const  DatabaseConnection  = require('./utils/database');
const loginRoutes = require('./Routes/user/authroutes');
const emailRoutes = require('./Routes/emailRoutes');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/user',loginRoutes);
app.use( '/user',emailRoutes);



const DbConnection = async()=>{
  try{
    const DbResult = await DatabaseConnection();
    // console.log(DbResult , "result")
    app.listen(PORT , ()=>{
      console.log(`Server is running on port ${PORT}`)
    })
  }catch(err){
    console.log(err);
  }
}
DbConnection();




