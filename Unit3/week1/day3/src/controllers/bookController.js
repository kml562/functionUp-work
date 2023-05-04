const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookmode");
const PublisherModel = require("../models/newpublisher")
const createBook = async function (req, res) {
    try {
        let book = req.body;
        let bookCreated = await bookModel.create(book);
         res.send({ data: bookCreated });

} catch (error) {
       res.send({"error":error.message}); 
    }

};

const getBooksData = async function (req, res) {
  let books = await bookModel.find().populate("author_id").populate("publisher");
  res.send({ data: books });
};

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await bookModel.find().populate("author_id");
  res.send({ data: specificBook });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;


// const BookModel = require("../models/bookModel");

// const createBooks = async (req, res) => {
//   let book = req.body;
//   let data = await BookModel.create(book);
//   res.send({ data: data });

// };

// module.exports = { createBooks };
//         if(book.authourid&&book.publisher){
//             let bookCreated = await bookModel.create(book);
//             res.send({ data: bookCreated });
//         }else{
//    if(book.authourid){ res.send({ data: "publisher id is required"})}
//    else { res.send({ data:"author id is required"}) }
//}