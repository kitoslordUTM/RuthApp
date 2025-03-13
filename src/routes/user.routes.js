import { Router } from "express";
import { signup, signIn, signOut, sendVerficationCode } from "../controllers/user.controller"; 

const router = Router();

router.post('/signUp', signup);
router.post('/signIn' , signIn);
router.post('/signOut', signOut);
router.patch('/verify', sendVerficationCode)

export default router;