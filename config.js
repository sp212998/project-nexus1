const { error } = require("console");
const mongoose=require("mongoose");


     mongoose.connect("mongodb://localhost:27017/login");
   const LoginSchema=new mongoose.Schema({
    userName:String,
    password:String
   });
   const collection =new mongoose.model('users',LoginSchema);

module.exports=collection;

