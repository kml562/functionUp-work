const userModel = require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel");

const User = async function (req, res) {
  const data = req.body;
  const users = await userModel.create(data);
  res.status(200).json({ msg: users });
};

const product = async function (req, res) {
  try {
    const data1 = req.body;
    const product = await productModel.create(data1);
    res.status(200).json({ msg: product });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
// header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the
// attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is
// checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well
// as the attrbiute **isFreeAppUser** is set to false in order document.

const order = async function (req, res) {
  try {
    const data = req.body;
    console.log(data);
    let isfreeappusesr = req.headers.isfreeappusesr;
    if (isfreeappusesr === "true") {
      req.body.amount = 0;
      req.body.isFreeAppUser = true;
      console.log("update data", data);
      
    } else if (isfreeappusesr === "false") {
      req.body.isFreeAppUser = false;

      let balances = await userModel.findByIdAndUpdate(
        { _id: data.userId, balance: { $gt: data.amount } },
        { $inc: { balance: -data.amount }, isFreeAppUser: false },
        { new: true }
      );
  
       if(!balances) {
        //let balan = await userModel.findByIdAndUpdate({ _id: data.userId},{balance:0})
      return  res.send({ msg: "orders ammount is higher than balance" });
      }
    }
    const orders = await orderModel.create(data);
      res.send({ msg: orders });
  } catch (err) {
    res.send({ msg: err.message });
  }
};

module.exports.User = User;
module.exports.product = product;
module.exports.order = order;
    // if (balances.balance >= data.amount) {
      //   const orders = await orderModel.create(data);
      //   console.log("balance", balances);
      //   res.send({ msg: orders });