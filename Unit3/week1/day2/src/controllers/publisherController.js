const bookmode = require("../models/bookmode");
const PublisherModel = require("../models/newpublisher");

const createPublisher = async (req, res) => {
  let publish = req.body;
  let dataa = await PublisherModel.create(publish);
  res.json({ data: dataa });
};

// For the books written by authors having a rating greater than 3.5, update the books price by 10
//(For eg if old price for such a book is 50, new will be 60)
// const putdata = async (req, res) => {
//   try {
// let updateboolen= await bookmode.updateMany(
//   {"publisher.name":{$in:["Penguin","HarperCollins"]}},
//   { isHardCover:true},
//   {new:true}
  
//   )

//   res.json({updatadata: updateboolen})
//   } catch (err) {
//     res.json({ error: err });
//   }
// };
const putdata = async (req, res) => {
  try {
    let updateResult = await bookmode.updateMany(
      {"publisher.name": {$in: ["Penguin", "HarperCollins"]}},
      {isHardCover: true},
      {new: true}
    );
    //console.log(updateResult) 
        res.json({updateResult});
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports = { createPublisher,putdata };
