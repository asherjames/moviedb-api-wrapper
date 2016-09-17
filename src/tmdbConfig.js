const fs = require('fs')
const net = require('./net')
const conf = require('../conf/conf.json')

module.exports = {
    updateConfig() {
        net.get(conf.confUrl, (data) => {
            conf.imageConf = data.images
            console.log('Updating TMDB image configuration data...')
            fs.writeFileSync(__dirname + '/../conf/conf.json', JSON.stringify(conf))
            console.log('Finished writing configuration to file...')
        })
    }
}