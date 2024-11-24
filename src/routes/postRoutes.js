import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, publicarPost,uploadImagem , atualizarNovoPost} from "../controller/postController.js";


const corsOption = {
    origin:"http://localhost:8000", 
    optionsSuccessStatus: 200
}

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
    
    app.use(cors(corsOption))
    app.get("/posts",listarPosts);
    app.post("/posts", publicarPost);
    app.post("/upload",upload.single("imagem"),uploadImagem)

    app.put("/upload/:id",atualizarNovoPost)
}

export default routes;