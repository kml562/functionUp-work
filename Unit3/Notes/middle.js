
// export const middleware= async(req,res,next)=>{
//     try {
//         let data= req.body;
//         let email= data.email;
//     if(!email){
//         res.status(404).json({message:"email is required"});
//     }
//       next()  
//     } catch (error) {
//         res.status(404).json({message:error.message});
//     }
// }
// export const getdata= async(req,res)=>{
//     try {
//         let data= req.body;
//       res.status(200).json({data:data});

//     } catch (error) {
//         res.status(404).json({message:error.message});
//     }

// }
// router.get("/users",middleware, getdata)

// import {middleware}