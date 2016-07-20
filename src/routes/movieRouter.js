const express = require('express')
const net = require('./net')

const movieRoute = express.Router()

movieRoute.get('/movies/genres', (req, res) => {
	net.getMovieGenres((data) => {res.json(data)})
})

module.exports = movieRoute