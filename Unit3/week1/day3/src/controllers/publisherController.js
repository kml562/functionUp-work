const bookmode = require("../models/bookmode");
const PublisherModel = require("../models/newpublisher");

const createPublisher = async (req, res) => {
  let publish = req.body;
  let dataa = await PublisherModel.create(publish);
  res.json({ data: dataa });
};

const putdata = async (req, res) => {
  try {

    let updateval = await bookmode.updateMany(
      {publisher: {$in:["6450ee3da78462b15437fb83","6450f956c544383bbc01e475"]}},
      {isHardCover:true},
         {new:true});
         
         let updatePrices = await bookmode.find()
        .populate("author_id", "rating") // Populate author document and include only rating field
        .where("author_id.rating") // Filter books where author's rating is greater than 3.5
        .updateMany(
          { rating: { $gt: 3.5 } },
          { $inc: { price: 10 } },
          {new:true}); // Increment price by 10 for all matching books
      
    
    res.send({ data: updateval,price:updatePrices });
  } catch (err) {
console.log(err);
    res.send({ error: err.message });
  }
};

module.exports = { createPublisher, putdata };
