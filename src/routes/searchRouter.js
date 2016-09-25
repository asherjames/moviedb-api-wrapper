const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const searchRoute = express.Router()

searchRoute.get('/search/movie', (req, res) => {
    let reqObj = {
        "with_genres": req.query.selectedGenre,
        "release_date.gte": req.query.toReleaseYear + "-01-01",
        "release_date.lte": req.query.fromReleaseYear + "-01-01"
    }
    net.getWithParams(conf.discoverMoviesUrl, reqObj, data => res.json(data))
})

searchRoute.get('/search/tv', (req, res) => {
    //TODO
})

searchRoute.get('/search/actor', (req, res) => {
    let reqObj = {
        "query": req.query.searchTerm,
        "include_adult": false
    }
    net.getWithParams(conf.searchActorsUrl, reqObj, data => {
        let actorArray = data.results.map( a => ({name: a.name, id: a.id}))
        res.json(actorArray)
    })
})

module.exports = searchRoute