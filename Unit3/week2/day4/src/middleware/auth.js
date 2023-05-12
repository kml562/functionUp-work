const jwt = require("jsonwebtoken");
//const { findById } = require("../models/userModel");
const userModel = require("../models/userModel");

const authenticate = async function (req, res, next) {
  try {


    // checking the data is in out database or not exists
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
    //validate this token
    let tokens= jwt.sign({ userId: user._id.toString(), org: "functionUp" }, "kmlbisht");
    res.setHeader("x-auth-token", tokens);
    req.userId=user._id.toString();
    next();
  } catch (error) {
    //sending the error in response
    res.status(500).json({ message: error.message });
  }
};

const authorise = async (req, res, next) => {
  try {
    // comapre the logged in user's id and the id in request
 let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });
    let verifyuser = jwt.verify(token, "kmlbisht");
    if (!verifyuser) {
      return res
        .status(400)
        .json({
          status: false,
          message: "token is wrong authorization if failed",
        });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.authmiddle = { authenticate, authorise };

// let userId= req.params.user.id;
// let finduser= await findById(userId);
// if(!finduser){
//   res.status(400).json({message:"user id does not exist in database"});}
// {
//     userId: user._id.toString(),
//     batch: "thorium",
//     organisation: "FUnctionUp",
//   },
//   "functionup-thorium"
// );
// res.setHeader("x-auth-token", token);
// res.send({ status: true, data: token });
