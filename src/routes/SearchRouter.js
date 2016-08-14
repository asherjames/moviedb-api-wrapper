const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const searchRoute = express.Router()

searchRoute.get('search/movie', (req, res) => {
    let reqObj = {
        "with_genres": req.query.genre,
        "release_date.gte": req.query.toReleaseYear,
        "release_date.lte": req.query.fromReleaseYear
    }

    net.getWithParams(conf.discoverMoviesUrl, reqObj, data => res.json(data))
})

searchRoute.get('search/tv', (req, res) => {
    //TODO
})

module.exports = searchRoute