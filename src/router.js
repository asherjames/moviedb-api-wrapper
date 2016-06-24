const express = require('express')
const morgan = require('morgan')

const router = express.Router()

router.get('/genres', (req, res) => {
	let sampleGenre = {
		id: 1,
		name: 'Thriller'
	}
	res.json(sampleGenre)
})

module.exports = router