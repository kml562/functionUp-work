const BookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");

/*List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query 
    will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id ) */

const list = async (req, res) => {
  try {
    let id = await authorModel
      .findOne({ author_name: "Chetan Bhagat" })
      .select({ author_id: 1, _id: 0 });
    let lists = await BookModel.find(id).select({
      name: 1,
      author_id: 1,
      _id: 0,
    });
    res.send({data:lists});
  } catch (error) {
    console.log(error);
  }
};
/*find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price
 in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query 
    aith author_id from previous query) */
const findName = async (req, res) => {
  try {
    let data = await BookModel.findOneAndUpdate(
      { name: "Two states" },
      { price: 100 },
      { new: true }
    ).select({ author_id: 1, _id: 0 });

    let authdata = await authorModel.find(data);
    res.send({ authordata: authdata, price: 100});
  } catch (error) {
    console.log(error);
  }
};

/*
Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective
 books.. 
 bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) 
 loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)
 */

const bookfilter = async (req, res) => {
  try {
    let filterprice = await BookModel
      .find({ price: { $gte: 50, $lte: 100 } })
      .select({ author_id: 1, _id: 0 });
    let newar = filterprice.map((el) => el.author_id);
    let set = [...new Set(newar)];
    let author = await Promise.all(
      set.map(async (el) => {
        let dataaa = await authorModel
          .findOne({ author_id: el })
          .select({ author_name: 1, _id: 0 });
        return dataaa.author_name;
      })
    );

    console.log("val", set);
    res.json({authorname:author});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { list, findName, bookfilter };
