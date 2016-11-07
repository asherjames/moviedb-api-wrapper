const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const schedule = require('node-schedule')
require('dotenv').config()

const movieRoute = require('./routes/movieRouter')
const utilRoute = require('./routes/utilRouter')
const searchRoute = require('./routes/searchRouter')
const imageRoute = require('./routes/imageRouter')
const tmdbConf = require('./tmdbConfig')

const app = express()

app.use(cors({credentials: true, origin: true}))
app.use(morgan('dev'))

schedule.scheduleJob({dayOfWeek: 0, minute: 0}, tmdbConf.updateConfig)

app.use('/filim-api', movieRoute, tvRoute, utilRoute, searchRoute, imageRoute)

let port = process.env.PORT || 3000

let server = app.listen(port, () => {
    console.log(`Filim ready for film-finding on port ${port}...`)
})
module.exports = server;