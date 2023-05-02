const bookmode = require("../models/bookmode");
const PublisherModel = require("../models/newpublisher");

const createPublisher = async (req, res) => {
  let publish = req.body;
  let dataa = await PublisherModel.create(publish);
  res.json({ data: dataa });
};

// For the books written by authors having a rating greater than 3.5, update the books price by 10
//(For eg if old price for such a book is 50, new will be 60)
const putdata = async (req, res) => {
  try {
    let name = req.params;
    let schema = req.body;
    let update = await PublisherModel.findOneAndUpdate(name, schema, {
      new: true,
    });

    let updatePrice = await bookmode.updateMany(
      { rating: { $gt: 3.5 } },
      { $inc: { price: 10 } },
      { new: true }
    );
    res.send({ data: update, updatePrice: updatePrice });
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = { createPublisher, putdata };
