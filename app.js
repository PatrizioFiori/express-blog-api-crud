const express = require(`express`);
const postsRouter = require(`./routers/postsRouters`);

const app = express()
const port = 3000;

app.get ("/", (req, res) => {
    res.send(`server attivo`)
})


app.use(`/posts`, postsRouter)

app.listen(port, () => {
    console.log(`in ascolto alla porta ${port}`)
})