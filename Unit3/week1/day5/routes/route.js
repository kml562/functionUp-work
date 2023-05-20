import express from 'express';
import { freeuserMiddleware} from "../middlewares/vadilMiddleware.js"
import { createUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/test-me', (req, res) => {
  res.send('My first ever API!');
});

router.post("/createuser", freeuserMiddleware, createUser)
// router.post("/createUser",  )
//router.post('/createUser', userMiddleware.freeuserMiddleware, UserController.createUser);
// Note: the following two lines are redundant and can be removed
export default router;
