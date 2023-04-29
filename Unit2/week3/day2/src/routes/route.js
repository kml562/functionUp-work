const express = require("express");
const router = express.Router();
const BookController = require("../controllers/bookController.js");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

//


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]



   router.post('/players', function (req, res) {
 //LOGIC WILL COME HERE
 let newplayer={
  "name": "mohit",
  "dob": "1/1/1990",
  "gender": "male",
  "city": "mumbai",
  "sports": [
      "soccer"
  ]
}

let val= players.find((el)=>el.name==newplayer.name)
if(!val){
  players.push(newplayer)
  res.send(  { data: players , status: true }  )
}else{
  res.send({ status:"name that already exists in the data"})
}
    
})

module.exports = router;

//create the following API’s (write logic in bookController and routes in routes):


// to create a new book details in the database
router.post("/createBook", BookController.createBook);

// get all the books in the database
router.get("/getBooksData",BookController.getBooksData)

//bookList : gives all the books- their bookName and authorName only 
router.get("/bookList",BookController.getBooksList)

//getBooksInYear: takes year as input in post request and gives list of all books published that year
 router.post("/getBooksInYear", BookController.getBooksInYear)

//getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a
// condition to fetch books that satisfy that condition, e.g if body had { name: “hi”} then you would fetch the
// books with this name if body had { year: 2020} then you would fetch the books in this year
router.post("/getparticularBooks",BookController.getParticularBooks)

// //getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
router.get("/getXINRBooks",BookController.getXINRBook)

// //getRandomBooks - returns books that are available in stock or have more than 500 pages 
 router.get("/getRandomBooks",BookController.getRandomBook )


//module.exports = router;
