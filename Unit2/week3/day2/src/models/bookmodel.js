const mongoose = require('mongoose');
/*
Assignment :
Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), 
price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName,
 totalPages , stockAvailable ( true false) 

*/
const bookSchema= new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        unique:true,
    },
    AuthorName:{
        type:String,
        required:true,
    },
    category:[String],
    tags:[String],
    isPublished: Boolean,
    prices: {
        indianPrice: {type:String, default:"1000 ₹"},
        europePrice: String,
    },
    year:{
 type:String,
 default:"2021"
    } ,
    totalPages:Number,
    StockAvailable:{
        type:Boolean,
default:false    },
    sales: {type: Number}
},{timestamps: true }

)
// it's convert into  books because of mongoose
module.exports=mongoose.model("Book",bookSchema)










