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
// module.exports={createBook,getData}
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
