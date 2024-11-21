import conectarAoBanco from "../config/dbConfig.js";

const connection = await conectarAoBanco(process.env.STRING_CONNECTION);

export default async function getTodosPosts(){
    const db = connection.db("imersao_instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}
