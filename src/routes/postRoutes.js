import express from "express";
import multer from "multer"

import { listarPosts, publicarPost,uploadImagem } from "../controller/postController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) =>{
    app.use(express.json()); //Indicando que cada string recebida pelo express deve ser interpretada como json
    app.get("/posts",listarPosts);

    app.post("/posts", publicarPost);
    app.post("/upload",upload.single("imagem"),uploadImagem)
}

export default routes;