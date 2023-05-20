import  Jwt  from "jsonwebtoken";
let Secretkey = process.env.JWT_SECRET
// for the authorization part middleware==
export const auth = (req,res,next) => {
    try {
        let token = req.headers.token;
        if (!token) {
            return res.status(401).json({ message: "please provide a token" });
        }
        let verfiytoken = Jwt.verfiytoken(token, Secretkey);
        if (!verfiytoken) {
        res.status(402).json({ message: "token is wrong" });
    }    
        req.body.token = verfiytoken;
        next();
   } catch (error) {
        res.status(502).json({ message: "server error" });
   } 
}