const axios = require('axios')

const key = require('../conf/api_key.json').apiKey
const conf = require('../conf/conf.json')

const axiosInst = axios.create({
	params: {api_key: key}
})

module.exports = {
	getMovieGenres(cb) {
		axiosInst.get(conf.movieGenreListUrl)
			.then(res => cb(res.data.genres))
			.catch(err => console.log(err))
	},

    getTvGenres(cb) {
        axiosInst.get(conf.tvGenreListUrl)
            .then(res => cb(res.data.genres))
            .catch(err => console.log(err))
    }
}