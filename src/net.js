const axios = require('axios')
const key = require('../conf/api_key.json').apiKey

const axiosInst = axios.create({
	params: {api_key: key}
})

module.exports = {
    get(url, cb) {
	    axiosInst.get(url)
            .then(res => cb(res.data))
            .catch(err => console.error(err))
    },

    getWithParams(url, params, cb) {
        axiosInst.get(url + params)
            .then(res => cb(res.data))
            .catch(err => console.error(err))
    }
}