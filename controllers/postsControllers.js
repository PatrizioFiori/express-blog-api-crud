const posts = require(`../data/posts`)

const index = (req, res) => {
    res.json (posts)
}

const show = (req, res) => {
    res.send("post in base all'id" + req.params.id)
}

const destroy = (req, res) => {
    res.send("cancello il post con id" + req.params.id)
}

module.exports = {index, show, destroy}