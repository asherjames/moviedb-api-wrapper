const express = require('express')
const net = require('../net')

const tvRoute = express.Router()

tvRoute.get('/tv/genres', (req, res) => {
    net.getTvGenres((data) => {res.json(data)})
})

module.exports = tvRoute