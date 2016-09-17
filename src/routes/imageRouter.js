const express = require('express')
const imgConf = require('../../conf/conf.json').imageConf
const request = require('request')

const imageRoute = express.Router()

imageRoute.get('/image/:size/:imageId', (req, res) => {
    let url = imgConf.base_url + imgConf.poster_sizes[req.params.size] + "/" + req.params.imageId
    req.pipe(request(url)).pipe(res)
})

module.exports = imageRoute