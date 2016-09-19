const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const schedule = require('node-schedule')
require('dotenv').config()

const movieRoute = require('./routes/movieRouter')
const tvRoute = require('./routes/tvRouter')
const utilRoute = require('./routes/utilRouter')
const searchRoute = require('./routes/searchRouter')
const imageRoute = require('./routes/imageRouter')
const tmdbConf = require('./tmdbConfig')

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(morgan('dev'))

schedule.scheduleJob({dayOfWeek: 0, minute: 0}, tmdbConf.updateConfig)

app.use('/filim-api', movieRoute, tvRoute, utilRoute, searchRoute, imageRoute)

let server = app.listen(80, () => {
    console.log("Filim ready for film-finding on 3000...")
})
module.exports = server;