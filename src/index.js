const express = require('express')
const app = express()

//settings
app.set('port', process.env.PORT || 5000)
app.set('json spaces', 2)



const morgan = require('morgan')
//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes(rest API)(se creo una carpera #routes) para estar mas ordenado
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies')) /* apli /api/movies, para buscarlo asi desde el local host*/

//starting the Server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
});