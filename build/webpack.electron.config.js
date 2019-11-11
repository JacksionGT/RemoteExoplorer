const { exec } = require('child_process');
const merge = require('webpack-merge')
var history = require('connect-history-api-fallback');

const commonConfig = require('./webpack.common')

const electronConfig = {
    output: {
        globalObject: 'self',
    },
    target: 'electron-renderer',
    externals: {
        require: 'window.require',
        process: 'window.process'
    },
    devServer: {
        contentBase: "./dist",
        port: 8081,
        open: false,
        hot: true,
        clientLogLevel: 'error',
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: {
            rewrites: [
              { from: /./, to: '/' }
            ]
        },
        after: function (app, server) {
            exec('electron .', (err, stdout, stderr) => {
                server.close(() => {
                    console.log("server closed")
                })
            })
        }
    }
}

module.exports = merge(commonConfig, electronConfig)