const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { authmiddle } = require('../middleware/auth');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login",authmiddle.authenticate ,userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authmiddle.authorise ,userController.getUserData)
router.post("/users/:userId/posts", authmiddle.authorise,userController.postMessage)

router.put("/users/:userId", authmiddle.authorise,userController.updateUser)
//router.delete('/users/:userId',authmiddle.authorise ,userController.deleteUser)

//router.deleteUser('/users/:userId', authmiddle.authorise, userController.deteteorg)
router.delete('/userskml/:userId', authmiddle.authorise, userController.deteteorg)
module.exports = router;