const axios = require('axios')
const key = require('../conf/api_key.json').apiKey
const querystring = require('querystring')

const axiosInst = axios.create({
	params: {api_key: key}
})

module.exports = {
    get(url, cb) {
        console.log(`request url: ${url}`)
	    axiosInst.get(url)
            .then(res => cb(res.data))
            .catch(err => console.error("There was an error performing a regular get"))
    },

    getWithParams(url, paramObj, cb) {
        let finalUrl = url + "?" + querystring.stringify(paramObj)
        console.log(`request url: ${finalUrl}`)
        axiosInst.get(finalUrl)
            .then(res => cb(res.data))
            .catch(err => console.error("There was an error performing a get with params"))
    }
}