const { Router } = require('express')
const router = Router()

//ruta para mandar datos a la WEB
router.get('/test', (req, res) => {
    const data = {
        "name": "Gian",
        "webSite": "charlesDj"

    }
    res.json(data)
})

module.exports = router;

//se creo este archivo, para usar las rutas desde otro archivo, ahora tenemos que llamarlo desde SRC/INDEX.JS