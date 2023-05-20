import express from "express";
import userRouter from "./routes/user.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
// morgan middleware
// app.use(morgan("tiny"))
// Global middlewares
// app.use(cors())
// // cookies and file middlewares
// app.use(cookieParser())
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }))
// Routing Middlewares
app.use("/api/user", userRouter);


export default app;
