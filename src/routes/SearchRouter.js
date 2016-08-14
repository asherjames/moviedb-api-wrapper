const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const searchRoute = express.Router()

searchRoute.get('search/movie', (req, res) => {
    let reqObj = {
        "with_genres": req.body.genre,
        "release_date.gte": req.body.toReleaseYear,
        "release_date.lte": req.body.fromReleaseYear
    }

    net.getWithParams(conf.discoverMoviesUrl, reqObj, data => res.json(data))
})

searchRoute.get('search/tv', (req, res) => {

})