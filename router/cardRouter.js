import express from "express";
import {CardSubmit} from "../controller/card/Card.js"
const router = express.Router();





//          REDIRECT TO USERRIGESTRATION CONTROLLER


router.post("/cardDetails",CardSubmit)


export default router;
