const express = require('express')
const morgan = require('morgan')

const net = require('./net')

const router = express.Router()

router.get('/movies/genres', (req, res) => {
	net.getMovieGenres((data) => {res.json(data)})
})

module.exports = router