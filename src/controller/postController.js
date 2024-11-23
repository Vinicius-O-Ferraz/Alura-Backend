import {getTodosPosts,criarPost} from "../models/postModels.js";
import fs from "fs"

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

export async function uploadImagem(req,res) {
    const newPost = req.body;
    try{
        const createdPost = await criarPost(newPost);
        const imgAtualizada = `uploads/${createdPost.insertedId}.png`
        fs.renameSync(req.file.path, imgAtualizada);
        res.status(200).json(createdPost);
    }catch(error){
        console.log(error.message);
        res.status(500).json({"erro" : "Sistema em manuntenção"});
    }
}
