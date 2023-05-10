const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { model } = require("mongoose");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and 
  getUserData api
*/
const createUserkml = async (req, res) => {
  try {
    let data = req.body;
    let createdata = await userModel.create(data);
    res.status(200).json({ data: createdata });
  } catch (er) {
    res.status(400).json({ message: err.message });
  }
};

const loginUserkml = async (req, res) => {
  try {
    let { emailId, password } = req.body;
    let userdata = await userModel.findOne({ emailId, password });
    if (!userdata) {
      return res.status(400).json({ message: "user not fount" });
    }
    let token = jwt.sign(
      {
        batch: "techn",
        organisation: "FunctionUp",
      },
      "kml-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
  } catch (er) {
    res.status(400).json({ message: err.message });
  }
};

const getUserDatakml = async(req,res)=>{
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if(!token){res.status(200).json({ message: "token not found"});}
    let decodedToken = jwt.verify(
      token,
      "kml-secret-key");
    if (!decodedToken){ return res.send({ status: false, msg: "token is invalid" });}
    let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){ return res.send({ status: false, msg: "No such user exists" });}
  res.send({ status: true, data: userDetails });
    
  } catch (error) {
    res.send({error:error.message})
  }
}


const updateUserkml= async(req,res)=>{
try {
  let userId = req.params.userId;
  // let user = await userModel.findById(userId);
  // if (!user) {
  //   return res.send("No such user exists");
  // }
  let token=  req.headers["x-auth-token"];
  let decodedToken = jwt.verify(
    token,
    "kml-secret-key");
    if(decodedToken) {
      let userData = req.body;
      let updatedUser = await userModel.findByIdAndUpdate( userId, userData,{new:true});
    
      res.send({ status: updatedUser, data: updatedUser });
    }else{
      res.send({ status: false, data: "failed" });
    }

  
} catch (err) {
  res.status(400).json({error:err.message});
}
}

// for deleting items from the client side;
const deleteuser= async (req, res) => {
  try {
    let userId= req.params.userId;
const deleteuser = await userModel.findByIdAndUpdate(userId, {isDeleted: true},{new:true});
res.send({data:deleteuser})
    
  } catch (error) {
    res.send({error:error.message});
  }


}
const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself

  // Decoding requires the secret again.
  // A token can only be decoded successfully if the same secret was used to create(sign) that token.
  // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
  let decodedToken = jwt.verify(
    token,
    "functionup-plutonium-very-very-secret-key"
  );
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  // Note: Try to see what happens if we change the secret while decoding the token
};

const updateUser = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.createUserkml= createUserkml;
module.exports.loginUserkml= loginUserkml;
module.exports.getUserDatakml=getUserDatakml
module.exports.updateUserkml=updateUserkml;
module.exports.deleteuser= deleteuser;