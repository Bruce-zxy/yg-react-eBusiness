var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var SRC_DIR = path.resolve(__dirname, "./src");
var BUILD_DIR = path.resolve(__dirname, "./build");

module.exports = {
    devtool: 'cheap-eval-source-map',

    entry: {
        main: SRC_DIR + '/entry.js', //唯一入口文件
        vendor: ['react']
    },
    output: {
        path: BUILD_DIR, //打包后的文件存放的地方
        filename: '[chunkhash].[name].js', //打包后输出文件的文件名
        publicPath: 'http://localhost:8888/build/' //启动本地服务后的根目录
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },

    postcss: [
        require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    ],

    devServer: {
        contentBase: '/dist',  //本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            filename: 'vendor.js'
        })
    ]

}
