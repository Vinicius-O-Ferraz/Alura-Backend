import {getTodosPosts,criarPost} from "../models/postModels.js";

export async function listarPosts(req,res){
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function publicarPost(req,res) {
    const newPost = req.body;
    try{
        const createdPost = await criarPost(newPost);
        res.status(200).json(createdPost);
    }catch(error){
        console.log(error.message);
        res.status(500).json({"erro" : "Sistema em manuntenção"});
    }
}
