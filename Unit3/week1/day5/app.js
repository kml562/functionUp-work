import express from "express";
import router from "./routes/route.js";

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.use("/api/user", userRouter);
app.use('/', router);

export default app;
