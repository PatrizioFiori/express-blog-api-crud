const posts = require(`../data/posts`)

const index = (req, res) => {
    res.json (posts)
}

const show = (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    
    if (!post){
        res.status(404)
        return res.json({
            "message": "id non trovato",
            status: 404,
            error: "not found"
        })
    }
    
    res.status(200).json(post);
}

const store = (req, res) => {
    res.send("store")
}

const update = (req, res) => {
    res.send("update")
}

const modify = (req, res) => {
    res.send("modify")
}

const destroy = (req, res) => {
        const post = posts.find(post => post.id == req.params.id)
        if (!post){
            res.status(404)
            return res.json({
                "message": "id non trovato",
                status: 404,
                error: "not found"
            })
        }
        posts.splice(posts.indexOf(post), 1)
        res.status(204).send(); // Risponde con uno stato 204 (Nessun Contenuto)
    }



module.exports = {index, show, store, update, modify, destroy};