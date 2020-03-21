'use strict';

const path = require('path');
const webpack = require('webpack');
const clientConfig = {
    // mode:'production',
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index'),
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/dist",
        filename: 'index.js',
        libraryTarget: 'jsonp',//注意打包为jsonp回调
        library: 'registerLibrary'//注意使用此特定名称
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015','stage-0']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    // watch:true,
    // watchOptions: {
    //     ignored: ['idedesign','node_modules']
    // },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // host:'127.0.0.1',
        disableHostCheck:true,
        port:8030,
        inline:true,
        hot:true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),//发布环境
            'process.env.PRODUCT_ENV': JSON.stringify(process.env.PRODUCT_ENV)//产品类型
        }),
        //webpack-hot-middleware 需要以下配置
        // OccurrenceOrderPlugin is needed for webpack 1.x only
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
        //     //不需要混淆
        //     //     new webpack.optimize.UglifyJsPlugin({
        //     //         uglifyOptions: {
        //     //             ecma: 8,
        //     //             compress: {
        //     //                 comparisons: false
        //     //             },
        //     //             output: {
        //     //                 ascii_only: true
        //     //             },
        //     //             warnings: true
        //     //         }
        //     //     })
    ]
};
module.exports = clientConfig;
