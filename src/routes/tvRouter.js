const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const tvRoute = express.Router()

tvRoute.get('/tv/genres', (req, res) => {
    net.get(conf.tvGenreListUrl, data => res.json(data.genres))
})

module.exports = tvRoute