const express = require('express')
const conf = require('../../conf/conf.json')
const net = require('../net')

const imageRoute = express.Router()

imageRoute.get('/image/:imageId', (req, res) => {
    net.get(conf.baseUrl + req.params[0], image => res.sendFile(image))
})

module.exports = imageRoute