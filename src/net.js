const axios = require('axios')
const qs = require('query-string')

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
        let finalUrl = url + "?" + qs.stringify(paramObj)
        console.log(`request url: ${finalUrl}`)
        axiosInst.get(finalUrl)
            .then(res => cb(res.data))
            .catch(err => console.error("There was an error performing a get with params"))
    }
}