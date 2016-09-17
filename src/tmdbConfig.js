const fs = require('fs')
const net = require('./net')
const conf = require('../conf/conf.json')

module.exports = {
    updateConfig() {
        net.get(conf.confUrl, (data) => {
            conf.imageConf = data.images
            fs.writeFileSync('../conf/conf.json', JSON.stringify(conf))
        })
    }
}