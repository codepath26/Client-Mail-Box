const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  emailSchema = new Schema({
  recipient : {
    type : String,
    required : true,
  },
  subject :{
    type : String,
    required : true,

  },
  readMail : {
    type : Boolean,
    required : true,
  },
  text : {
    type : String,
  
  },
  sender : {
    type : String,
    required : true,

  },
  blueTick : {
    type : Boolean,
    required : true,

  },
})


module.exports = mongoose.model('Email' , emailSchema);