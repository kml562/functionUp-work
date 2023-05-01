const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  author_id:{
type:String,
require:true
  } ,
 author_name: {
    type:String,
    require:true,
 },
 age: Number,
 address: String

 

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema) 
// //    {    
//     author_id:3,
//     author_name:"Ramanujan",
//     age:100,
//     address:"Tamilnadu"
// }



// String, Number
// Boolean, Object/json, array