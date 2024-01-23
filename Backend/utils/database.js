const  mongoose = require("mongoose");

const DatabaseConnection = async()=>{
const dburi = process.env.URI;
console.log("this is the url" , dburi)
try{
 const result = await mongoose.connect(dburi);
 return result;
}catch(err){
  return err
}

}

module.exports =  DatabaseConnection;