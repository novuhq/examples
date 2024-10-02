import express from "express";
import {signUp,signIn} from "../controllers/user.js"
const router= express.Router();

router.post('/signup',signUp);
router.post('/signin',signIn);

export default router;
