import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import connect from './config/db.js'
import userRouter from "./router/userRouter.js"



const app = express()
const port = 8000

dotenv.config()
app.use(cors())
app.use(bodyParser.json());
app.use('/user',userRouter)

connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => console.log("Server is running :" + process.env.PORT))