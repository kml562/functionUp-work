const mongoose = require('mongoose');
/*

On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer
 video for the same : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's 
 for books i.e. : 1 api to create a new book and another api to get the list of all books. 

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
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
},{timestamps: true }

)

module.exports=mongoose.model("Book",bookSchema)
// it's convert into  books because of mongoose









