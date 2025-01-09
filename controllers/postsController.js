const posts = require(`../data/posts`)
//const notFound = require(`./middlewares/notFound.js`);

const index = (req, res) => {
    const tag = req.query.tag;

    if (tag) {
        const tagMaiuscolo = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
        const postFiltrati = posts.filter(post => post.tags.includes(tagMaiuscolo));
        res.json(postFiltrati);
    } else {
        res.json(posts);
    }
};


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
    const id = posts.at(-1).id +1;
    const newPost = {
        id,
        ...req.body
    }
    console.log (req.body)
    posts.push(newPost)
    res.status(201)
    res.json(posts)
}

const update = (req, res) => {
    res.send("update-PUT")
}

const modify = (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id == id);
    
    if(!post){
        res.status(404)
        return res.json({
            message: "non trovato",
            status: 404,
            error: "not found"
        })
        
    } else {
    for (let key in req.body){
        post[key] = req.body[key]
        }
    }

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
        res.status(204).send();
    }



module.exports = {index, show, store, update, modify, destroy};