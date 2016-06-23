const express = require('express')
const genreRoute = require('./router')

const app = express()

app.use('/filim-api', genreRoute)

app.listen(3000, () => {
	console.log("Filim ready for film-finding on 3000...")
})