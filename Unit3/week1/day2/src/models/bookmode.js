const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: String,
    author_id: {
     
      type: ObjectId,
      ref: "LibraryAuthor",
     required:true,
    isValid: true
    },
    price: Number,
    rating:{
type:Number,
default:4.3
    } ,
    publisher: {
    type: ObjectId,
      ref: "PublichBook",
      required:true,
      isValid: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LibraryBook", bookSchema);
