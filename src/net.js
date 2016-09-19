const axios = require('axios')
const querystring = require('querystring')

const axiosInst = axios.create({
	params: {api_key: process.env.TMDB_API_KEY}
})

module.exports = {
    get(url, cb) {
        console.log(`request url: ${url}`)
	    axiosInst.get(url)
            .then(res => cb(res.data))
            .catch(err => console.error("There was an error performing a regular get", err))
    },

    getWithParams(url, paramObj, cb) {
        let finalUrl = url + "?" + querystring.stringify(paramObj)
        console.log(`request url: ${finalUrl}`)
        axiosInst.get(finalUrl)
            .then(res => cb(res.data))
            .catch(err => console.error("There was an error performing a get with params"))
    }
}