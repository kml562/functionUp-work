//NOTE: In some of the below apis a header validation is to be performed (create user and create order). 
//The name of the header is ‘isFreeAppUser’. Write a header validation that simply checks whether this header is
// present or not. Please note this validation should only be called in create user and create order apis. Perform 
//this validation in a middleware.
 export const freeuserMiddleware= async (req, res, next) =>{
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


