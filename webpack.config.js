const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { exec } = require('child_process');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        globalObject: 'self',
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    target: 'electron-renderer',
    resolve:{
        extensions: ['.js', '.jsx']
    },
    externals: {
        require: 'window.require'
    },
    devServer: {
        contentBase: "./dist",
        open:false,
        after:function(app, server){
            exec('electron .', (err, stdout, stderr) => {
                console.log(err);
                console.log('err--------------------');
                server.close(() => {
                    console.log("server closed")
                })
            })
            console.log('--------------------');
        }
    },
    module: {
        rules: [
            { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '远程文件管理器',
            template: './public/index.html',
            inject: true,
            hash: true,
            minify: {
                removeComments: true, //移除HTML中的注释
                // collapseWhitespace:true    //删除空白符与换行符 
            }
        })
    ]
}