import express,{Request,Response,Application} from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose"
const nodemailer = require("nodemailer");

const app:Application=express();
app.use(express.json())

app.get("/",(req:Request, res:Response): void=>{
const age:Number=20;
res.json({age});
})
const MONGO_URI: string = (process.env.MONGO_URI as string);
console.log(nodemailer);
const connectDb=()=>{

    const uri = 'mongodb+srv://contact:My9J9xnpsYSRnH6@cluster0.ncmj4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

   return  mongoose.connect(process.env.MONGO_URI as string ,{
      
      })
    .then(res=>console.log("connected"))
    .catch(err=>console.log("error",err)) 


}

app.listen(process.env.PORT ,():void=>{
    console.log("listening " + process.env.PORT)
    connectDb()
})