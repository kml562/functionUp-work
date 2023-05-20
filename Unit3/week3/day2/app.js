import express from "express";
import userRouter from './src/routes/user.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routing middleware -- mounting

app.use('/api/users', userRouter)

export default app;