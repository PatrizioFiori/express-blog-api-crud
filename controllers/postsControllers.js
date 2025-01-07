const posts = require(`../data/posts`)

const index = (req, res) => {
    res.json (posts)
}

const show = (req, res) => {
    res.send("post in base all'id" + req.params.id)
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
    res.send("cancello il post con id" + req.params.id)
}



module.exports = {index, show, store, update, modify, destroy};