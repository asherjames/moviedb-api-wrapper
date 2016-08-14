const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const movieRoute = express.Router()

movieRoute.get('/movies/genres', (req, res) => {
    net.get(conf.movieGenreListUrl, data => res.json(data.genres))
})

module.exports = movieRoute