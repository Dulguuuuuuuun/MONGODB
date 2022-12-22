import mongoose from "mongoose";

const   UserSchema = new mongoose.Schema({
    title:String,
    name:String,
    image:String,
    reaction:Number,
    time:Number,
});
const Post = mongoose.model("User",UserSchema)


export default Post;