/**
 * 一个webpack配置的模板，当前为dev环境
 * @type {webpack}
 */
let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: ['./client/index.js']
        ,vendor: [
            "react",
            "react-dom",
            "react-redux",
            "redux"
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }) // 块文件。webpack版本不同的话语法不一样
    ],
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "common/styles"),
                loader: 'style-loader!css-loader?modules'
            }
        ]
    }
};
