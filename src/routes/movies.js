const { Router } = require('express')
const router = Router()

const _ =require('underscore') //se instalo para elimindar por ID una pelicula


const movies = require('../sample.json')
console.log('movies')


//mando el dato movies a la web
router.get('/', (req, res) =>{
    res.json(movies)           //desde aca llamo a la carpeta /sample.json para mostrar en web//
})

/*//usamos postman, desde la ruta confirmamos si los datos enviados desde postman son correctos y guardamos datos
//con el metodo req.body, id. (push) en el PORTAL DE POSTMAN */

router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length +1;
        const newMovie = {...req.body, id}
        console.log(newMovie)
        movies.push(newMovie)
        res.json(movies)
    } else {
        res.json({error: 'there was an error.'})
    }
    res.send('received')
})

//ACTUALIZAR
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating ) {
        _.each(movies, (movie, i) => {
            if (movies.id == id) {
                movies.title = title
                movies.director = director
                movies.year = year
                movies.rating = rating
            }
        })
        res.json(movies);
    }else {
        res.status(500).json({error: 'there was an error.'})
    }

})

//METODO PARA ELIMINAR
router.delete('/:id', (req, res) => {
    const { id } = req.params
    _.each(movies, (movies, i) => {       //_.each empieza a rrecorrer los arreglos/
        if (movies.id == id) {           //si el id es igual al ID que estoy recibiendo//
            movies.splice(i, 1);        //uso el metodo SPLICE para eliminar//
        }
    })         
    res.send('deleted')                 //una vez eliminado envia el mensaje DELETED
})
module.exports = router