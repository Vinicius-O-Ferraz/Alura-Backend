import express from "express";
import { listarPosts } from "../controller/postController.js";

const routes = (app) =>{
    app.use(express.json()); //Indicando que cada string recebida pelo express deve ser interpretada como json
    app.get("/posts",listarPosts);
}

export default routes;