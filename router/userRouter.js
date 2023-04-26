import express from "express";
import Login from "../controller/auth/Login";
import Register from "../controller/auth/Register";
const router = express.Router();




//          REDIRECT TO USERRIGESTRATION CONTROLLER


router.post("/register", Register)
router.post("/login", Login)


export default router;
