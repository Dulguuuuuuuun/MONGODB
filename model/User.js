import mongoose from "mongoose";

const   UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    hobbies:Array,
    images:String,
});
const User = mongoose.model("User",UserSchema)


export default User;