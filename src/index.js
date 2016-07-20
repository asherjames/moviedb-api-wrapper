const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const movieRoute = require('./routes/movieRouter')
const utilRoute = require('./routes/utilRouter')

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(morgan('tiny'))

app.use('/filim-api', movieRoute, utilRoute)


app.listen(3000, () => {
	console.log("Filim ready for film-finding on 3000...")
})