import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log(err);
})
const app = express();

app.listen(3000, ()=> {
    console.log('server is running in port 3000');
});