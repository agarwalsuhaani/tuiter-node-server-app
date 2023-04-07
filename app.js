import express from 'express';
import cors from 'cors';
import TuitsController from "./controllers/tuits/tuit-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
// const CONNECTION_STRING = 'mongodb+srv://agarwalsuhaani:burlmouse77@cluster0.wj64frr.mongodb.net/tuiter?retryWrites=true&w=majority';
    // || 'mongodb://127.0.0.1:27017/tuiter
mongoose.connect(CONNECTION_STRING);



const app = express()
app.use(cors())
app.use(express.json());

TuitsController(app);


app.listen(process.env.PORT ||4000)
