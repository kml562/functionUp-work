const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController.js");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

/*

On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer
 video for the same : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's 
 for books i.e. : 1 api to create a new book and another api to get the list of all books. 

*/
router.post("/createUser", UserController.createUser);

router.get("/getUsersData", UserController.getUsersData);

// to create a new book details in the database
router.post("/createBook", BookController.createBook);



router.get("/getBooksData",BookController.getBooksData)

module.exports = router;
