const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const  publishController= require("../controllers/publisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )


router.post("/createpubl", publishController.createPublisher)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
// Create a new PUT api /books and perform the following two operations
//a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books 
//published by 'Penguin' and 'HarperCollins', update this key to true.
// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if 
//old price for such a book is 50, new will be 60)


router.put("/books/:name", publishController.putdata )


module.exports = router;