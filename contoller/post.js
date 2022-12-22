import Post from "../model/Post.js";


export const createPost = async (req, res)=>{
    try {
        const post = Post.create(req.body)
        if(!post) throw new Error(req.body)
    } catch (error) {
        res.send(
            data : post,
        )
    }
}

export const getPostById = async (req, res) => {
    try {
        const {id} =req.params;
        const user = await User.findById(id);
        res.status(200).send({
            success : true,
            data : user
        })
    } catch (error) {
       res.status(400).send({
        success : false,
        data : error.message
       })
        
    }
}