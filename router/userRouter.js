import express from "express";
import { Login } from "../controller/auth/Login.js";
import { Register } from "../controller/auth/Register.js";
import {sendemail} from "../controller/sendEmail.js"
const router = express.Router();




//          REDIRECT TO USERRIGESTRATION CONTROLLER


router.post("/register", Register)
router.post("/login", Login)
router.post('/sendEmail',sendemail)


export default router;
