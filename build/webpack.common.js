const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
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