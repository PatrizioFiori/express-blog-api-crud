// Sanitizzazione: regex espressioni regoli
// Validazione: controllo che il dato che mi arriva in request body che rispetti determinati requisiti e criteri sulla base della logica

const validate = (req, res, next) => {

    const {titolo, content, image} = req.body;

    //regex e trim
    const sanitizeText = (text) => text.replace(/[^a-zA-Z0-9\s]/g, '').trim();
    const sanitizeImage = (url) => url.trim();



    if (titolo) req.body.titolo = sanitizeText(titolo);
    if (content) req.body.content = sanitizeText(content);
    if (image) req.body.image = sanitizeImage(image);


    if (titolo && typeof titolo == "string") {
        return funzione404(res);
    }
    if (content && typeof content == "string") {
        return funzione404(res);
    }
    if (image && (typeof image == "string" || !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(image))) {
        return funzione404(res);
    }

    next()
    }

    function funzione404(res){
        return res.status(404).json({error: "req body compilato in modo errato"})
    }

    module.exports = validate