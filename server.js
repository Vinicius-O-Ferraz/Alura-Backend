import express from "express";

const posts = [
    {
        id: 1,
        description: "Minha foto teste ",
        image: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        description: "Gato relaxando no jardim",
        image: "https://placecats.com/relax/400/200",
    },
    {
        id: 3,
        description: "Aventuras felinas ao pôr do sol",
        image: "https://placecats.com/sunset/500/250",
    },
    {
        id: 4,
        description: "Pequeno explorador em ação",
        image: "https://placecats.com/explorer/600/300",
    },
    {
        id: 5,
        description: "Momento de descanso do gato",
        image: "https://placecats.com/chill/700/350",
    },
    {
        id: 6,
        description: "Foco no olhar felino",
        image: "https://placecats.com/closeup/800/400",
    }
];


const app = express();
app.use(express.json()); //Indicando que cada string recebida pelo express deve ser interpretada como json

app.listen(3000,() =>{
    console.log("Servidor escutando...");
});

function buscarPostPorID(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}

app.get("/posts",(req,res)=>{
    res.status(200).send(posts);
});

app.get("/posts/:id",(req,res)=>{// :id fala pro express que o id é uma variável
    const index = buscarPostPorID(req.params.id) //chamando o id do req
    res.status(200).send(posts[index]);
});

