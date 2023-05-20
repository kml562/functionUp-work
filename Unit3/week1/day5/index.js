import app from "./app.js";    //right full name of the file 
import mongoose from "mongoose";
import * as dotenv from "dotenv"

dotenv.config();   // 

app.listen(process.env.PORT,()=>{    // process is a object 
console.log("listening on port");
})
mongoose.connect(process.env.URL).then(()=>{
        console.log("server connected ");
    }).catch(err=>{
        console.log(err);
    })