import prisma from "../DB/db.config.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error getting posts" });
    }
};

export const createPost = async (req, res) => { 
    try {
        const {user_id , title, description} = req.body;
        const post = await prisma.post.create({
            data: {
                user_id: Number(user_id),
                title,
                description,
            },
        });
        res.status(201).json({msg :"Post created successfully", post});
    } catch (error) {
        res.status(500).json({ message: "Error creating post" });
    }
};

export const showPost = async (req,res) => {
    const postId = req.params.id;
    const post = await prisma.post.findFirst({
        where:{
        id: Number(postId),
}});
    return res.status(200).json(post);
}

export const updatePost = async (req,res) =>{
    const postId = req.params.id;
    const {title,description} = req.body;
    const post = await prisma.post.update({
        where:{
            id: Number(postId)
        },
        data:{
            title,
            description
        }
    })
    return res.status(200).json({msg :"Post updated successfully", post : post});
}

export const deletePost  = async (req,res)=>{
    const postId = req.params.id;
     await prisma.post.delete({
        where:{
            id : Number(postId)
        }
    })
    res.status(200).json({msg : "post deleted successfully",})
}