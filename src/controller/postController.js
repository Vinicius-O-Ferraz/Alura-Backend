import {getTodosPosts,criarPost,atualizarPost} from "../models/postModels.js";
import fs from "fs"
import gerarDescricaoComGemini from "../../services/gemini_services.js";

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

export async function atualizarNovoPost(req,res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`

    try{

        const imgBuffer = fs.readFileSync(`uploads/${id}`)
        const desc = await gerarDescricaoComGemini(imgBuffer)
        const createdPost = await atualizarPost(id, post);
        let alternative_description = " "

        const post = {
            img_url : urlImagem,
            description:desc,
            alt:alternative_description
        }

        res.status(200).json(createdPost);
    }catch(error){
        console.log(error.message);
        res.status(500).json({"erro" : "Sistema em manuntenção"});
    }
}