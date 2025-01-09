
const errorsHandler = (err, req, res, next) => {
    console.log(err)
    res.status(500)
    res.json ({
        messager: err.message,
        status: 500,
        error: "internal server error"
    })
}

module.exports = errorsHandler