const { model } = require("mongoose");
const { head } = require("../routes/route");

const mid1= function ( req, res, next) {
  let  head=req.headers["isfreeappusesr"]
    head==="true"?head=true:head=false;
    console.log(req.headers)
    if(!head){
        res.send("the request is missing a mandatory header")
    }
    next()
}

const mid2=  ( req, res, next)=>{
    try {
        let isfreeappusesr= req.headers["isfreeappusesr"];
        if(!isfreeappusesr){
            res.status(400).json({message:"in header isfreeappusesr is missing"});
        }
        console.log("middleware 2")
        req.body.isfreeappusesr= isfreeappusesr;
        console.log(req.body)
        next();
    } catch (err) {
        res.status(400).json({message:"in header isfreeappusesr is missing"})
    }
}

module.exports.mid1= mid1
module.exports.mid2= mid2

