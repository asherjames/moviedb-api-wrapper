const express = require('express')
const morgan = require('morgan')

const net = require('./net')

const router = express.Router()

router.get('/genres', (req, res) => {
	net.getGenres((data) => {res.json(data)})
})

module.exports = router