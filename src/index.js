const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const movieRoute = require('./routes/movieRouter')
const tvRoute = require('./routes/tvRouter')
const utilRoute = require('./routes/utilRouter')
const searchRoute = require('./routes/SearchRouter')

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded())

app.use('/filim-api', movieRoute, tvRoute, utilRoute, searchRoute)


app.listen(3000, () => {
	console.log("Filim ready for film-finding on 3000...")
})