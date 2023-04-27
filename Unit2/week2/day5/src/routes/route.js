const express = require('express');
const router = express.Router();
const {createUser,getUsersData}=require("../controllers/userController")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", createUser  )

router.get("/getUsersData", getUsersData)

module.exports = router;