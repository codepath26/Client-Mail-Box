require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');



const generateAccessToken = (id  , email , name)=>{
  try{

    const secretKey = process.env.JSONWEB_SECERET_KEY;
    const payload = {
      userId : id,
      email : email,
      name : name,
    };
    console.log("this is the secretkey" , secretKey)
    const token = jwt.sign(payload , secretKey , {
      expiresIn: '24h'
    })
    if(token){
      console.log(token);
      return token;
    }else{
      console.log("token is  not generated")
    }
  }catch(err){
    console.log(err);
  }
};



exports.signupCheck  = async(req ,res)=>{
  try{
    const {name , email , password} = req.body;
    const presentUser = await User.findOne({
      email : email,
    });
    if(presentUser){
      return res.status(403).json({message : "User Is Already Exists"});

    }else{
      const incryptedPassword = await bcrypt.hash(password , 10);
      const user = new User({
        name : name , 
        email : email,
        password : incryptedPassword,
      });
      const result = await user.save();
      console.log('result is for the user save method' , result);
      res.status(201).json(user);
    }
  }catch(err){
    if(err.name === 'SequelizeUniqueConstraintError'){
      res.status(403).json({message : "Email address is already in use Try another Please"});
    }else{
      console.log(err);
      res
      .status(500)
      .json({message : 'An error occured while processing you request'});
    }
  }
};
exports.logincheck = async (req, res) => {
  let email1 = req.body.email;
  let password1 = req.body.password;
  console.log(email1 , password1)
  let user = await User.findOne({email: email1 } );
  console.log("user" , user);
  if (user) {
    const passwordMatch = await bcrypt.compare(password1, user.password);
    console.log('passwordmathc', passwordMatch);
    if (passwordMatch) {
      //  now this time we are calling the JWT
      const token = generateAccessToken(user._id, user.email ,user.name);
       console.log(token,'toaken');
      res
        .status(200)
        .json({
          message: "user loging successfully",
          token: token,
          user: user,
        });
    } else {
      console.log("you endered the wrong passwored")
      res.status(404).json({ message: "You entered Wrong Passwprd" });
    }
  } else {
    console.log('user not found');
    res.status(404).json({ message: "user is not found" });
  }
};