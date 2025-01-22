const express = require(`express`);
const postsRouter = require(`./routers/postsRouters`);
const errorsHandler = require(`./middlewares/errorsHandler.js`);
const notFound = require(`./middlewares/notFound.js`);
const cors = require('cors')

const app = express()
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.static('public'))

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`server attivo`)
})

app.use(`/posts`, postsRouter)

app.use(notFound)

app.use(errorsHandler)

app.listen(port, () => {
    console.log(`in ascolto alla porta ${port}`)
})