const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.createUserkml  )

router.post("/login", userController.loginUserkml)
router.get("/userkml/:userId", userController.getUserDatakml)
router.put("/userkml/:userId", userController.updateUserkml)
//The userId is sent by front end

router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)
router.patch("/users/:userId", userController.deleteuser)

module.exports = router;

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYXRjaCI6InRlY2huIiwib3JnYW5pc2F0aW9uIjoiRnVuY3Rpb25VcCIsImlhdCI6MTY4MzU3NDQ4M30.OGBdR7KIs7eWGjzGGRPf1ulhd-np57wNz0TybeeQmdo"