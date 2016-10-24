const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const searchRoute = express.Router()

searchRoute.get('/search/movie', (req, res) => {
    let reqObj = {
        "with_genres": req.query.selectedGenre,
        "release_date.gte": req.query.fromReleaseYear + "-01-01",
        "release_date.lte": req.query.toReleaseYear + "-01-01",
        "with_cast": req.query.withActors,
        "with_keywords": req.query.withKeyword,
        "sort_by": req.query.withSorter
    }
    net.getWithParams(conf.discoverMoviesUrl, reqObj, data => res.json(data))
})

searchRoute.get('/search/tv', (req, res) => {
    //TODO
})

searchRoute.get('/search/actor', (req, res) => {
    if (req.query.searchTerm.length > 0) {
        let reqObj = {
            "query": req.query.searchTerm,
            "include_adult": false
        }
        net.getWithParams(conf.searchActorsUrl, reqObj, data => {
            let actorArray = data.results.sort((a, b) => {
                if (a.popularity < b.popularity) {
                    return 1;
                }
                if (a.popularity > b.popularity) {
                    return -1;
                }
                return 0;
            }).map(e => ({name: e.name, id: e.id}))

            res.json(actorArray)
        })
    } else {
        res.json([])
    }
})

module.exports = searchRoute