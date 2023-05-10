 const freeuserMiddleware= async (req, res, next) =>{
    try {
        console.log(req.headers);
    const isFreeAppUsesr=req.headers["isFreeAppUsesr"];
    if(!isFreeAppUsesr){
        res.status(400).json({message:"isfreeuser false"});
        console.log("error: isFreeAppUsesr")
    }
    next();
    } catch (err) {
        res.send({message:err.message});
    }
}


module.exports= freeuserMiddleware;