import express from "express";

const posts = [
    {
        description: "Minha foto teste ",
        image: "https://placecats.com/millie/300/150",
    },
    {
        description: "Gato relaxando no jardim",
        image: "https://placecats.com/relax/400/200",
    },
    {
        description: "Aventuras felinas ao pôr do sol",
        image: "https://placecats.com/sunset/500/250",
    },
    {
        description: "Pequeno explorador em ação",
        image: "https://placecats.com/explorer/600/300",
    },
    {
        description: "Momento de descanso do gato",
        image: "https://placecats.com/chill/700/350",
    },
    {
        description: "Foco no olhar felino",
        image: "https://placecats.com/closeup/800/400",
    }
];


const app = express();
app.use(express.json()); //Indicando que cada string recebida pelo express deve ser interpretada como json

app.listen(3000,() =>{
    console.log("Servidor escutando...");
});

app.get("/posts",(req,res)=>{
    res.status(200).send(posts);
});
