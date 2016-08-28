const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const movieRoute = require('./routes/movieRouter')
const tvRoute = require('./routes/tvRouter')
const utilRoute = require('./routes/utilRouter')
const searchRoute = require('./routes/searchRouter')
const imageRoute = require('./routes/imageRouter')

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(morgan('dev'))

app.use('/filim-api', movieRoute, tvRoute, utilRoute, searchRoute, imageRoute)


app.listen(3000, () => {
    console.log("Filim ready for film-finding on 3000...")
})