const express = require('express');
const router = express.Router();

const commonMW = require ("../middlewares/commonMiddlewares")
const ModelController=require("../controllers/mainController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/Createuserdetails", commonMW.mid1, ModelController.User)
router.post("/Createproductdetails", commonMW.mid1, ModelController.product)
router.post("/Createorderdetails", commonMW.mid2,ModelController.order)



module.exports = router;