const { response } = require("express");
const BookModel = require("../models/bookmodel");

const createBook = async function (req, res) {
  let bookdata = req.body;
  let savedata = await BookModel.create(bookdata);
  res.send({ msg: savedata });
};

const getBooksData = async function (req, res) {
  try {
   let val= await BookModel.find()   
    res.send({ msg:val });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

////bookList : gives all the books- their bookName and authorName only ,
const getBooksList = async function(req,res){
  try {
    let data= await BookModel.find().select({bookName:1,AuthorName:1,_id:0 })
    res.send({ msg:data});
  } catch (error) {
    console.log(error);
  }
}

////getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear = async function(req,res){
  try {
    let yearval= req.body.year
    let data= await BookModel.find({year:yearval});
    res.send({msg:data})
  
  } catch (error) {
    console.log(error);
  }
}

//getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a
// condition to fetch books that satisfy that condition, e.g if body had { name: “hi”} then you would fetch the
// books with this name if body had { year: 2020} then you would fetch the books in this year
const getParticularBooks=async(req,res)=>{
  try {
    let data= req.body;
    let dataa= await BookModel.find(data)
    res.send({msg:dataa})
    
  } catch (error) {
    console.log(error)
  }
}

//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getXINRBook=async(req,res)=>{
try {
  //let inpr= prices.indianPrice;
  //{$or:[{inpr:"100 ₹"},{inpr:"500 ₹"},{inpr:"1000 ₹"}]}
  let data = await BookModel.find({"prices.indianPrice":{$in:["100 ₹","200 ₹","1000 ₹"]}});
  res.send({msg:data})
} catch (error) {
  console.log(error)
}
}

//getRandomBooks - returns books that are available in stock or have more than 500 pages 
const getRandomBook=async function(req,res){
  try {
    let dataa= await BookModel.find( {totalPages:{ $gt:  500 },StockAvailable:true}  )
    res.send({msg:dataa})
  } catch (error) {
    console.log(error)
  }
}
 module.exports={createBook,getBooksData,getBooksList,getBooksInYear,getParticularBooks,getXINRBook,getRandomBook}
// module.exports={createBook,getData}
// module.exports.createBook = createBook;
// module.exports.getBooksData = getBooksData;
