import mongoose from "mongoose";

const   UserSchema = new mongoose.Schema({
    id:Number,
    firstname:String,
    lastname:String,
    age:Number,
    gender:String,
    email:String,
    phone:Number,
    userName:String,
    password:String,
    birthDay:Number,
    height:Number,
    images:String,
});
const User = mongoose.model("User",UserSchema)


export default User;