const express = require(`express`);
const postsRouter = require(`./routers/postsRouters`);
const errorsHandler = require(`./middlewares/errorsHandler`);
const notFound = require(`./middlewares/notFound`);

const app = express()
const port = 3000;

app.use(express.json()) 

app.get ("/", (req, res) => {
    res.send(`server attivo`)
})

app.use(`/posts`, postsRouter)

app.use(notFound)

app.use(errorsHandler)

app.listen(port, () => {
    console.log(`in ascolto alla porta ${port}`)
})