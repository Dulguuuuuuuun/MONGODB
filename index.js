import express from "express";
import mongoose from "mongoose";
import {port, MONGODB_URI} from "./config.js"
import router from "./router/post.js"


const app = express();


app.use(express.json());
app.use("/posts", router);

const connect =()=>{
    try{
        mongoose.connect(MONGODB_URI,{})
        .then(()=>{
            console.log("connected to MONGODB")
        })
    }
    catch(error){
        console.error("could  not connect to MONGO       DB");
        process.exit(1)
    }
}



app.listen(port, async () => {
connect()
  console.log(`Server running ${port}`);
});