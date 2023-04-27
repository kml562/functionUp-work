const express = require("express");

const { route } = require("express/lib/application");
const router = express.Router();

/// given in problem statements,

let players = [
  { "name": "manish", "dob": "1/1/1995","gender": "male", "city": "jalandhar", "sports": ["swimming"]},
      {"name": "gopal","dob": "1/09/1995","gender": "male","city": "delhi","sports":[ "soccer" ]},
      {"name": "lokesh","dob": "1/1/1990", "gender": "male","city": "mumbai","sports": ["soccer"]
  }
];

//Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t 
//allow saving the data of a player with a name that already exists in the data)

router.post("/players", function(req, res){
// req is came as a body and in body we have to send a object and i'm using 
// we have send all the details in request in body;
let reqname= req.body.name;
console.log(reqname)
  let val= players.find((el)=> el.name==reqname);
  if(val){
res.send({status:"Player already exists"})
  }else{

players.push(req.body);
res.send(  { data: players , status: true }  )

  }

})

module.exports = router;