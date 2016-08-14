const express = require('express')

const utilRoute = express.Router()

utilRoute.get('/allyears', (req, res) => {
    res.json(getYears())
})

function getYears() {
    let year = new Date().getFullYear()
    return Array.from({length: year - 1899}, (a, b) => b + 1900).reverse()
}

module.exports = utilRoute