const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const webPageConfig = {
    devServer: {
        open:true
    }
}
module.exports = merge(commonConfig,webPageConfig)