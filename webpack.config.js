const path = require('path');
// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    /*devServer: {
        contentBase: '/dist'
    },*/
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({

        })
    ]*/
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?,*)?$/i,
                // uglifyOptions: {
                //     compress: {}
                // },
                // minify(file, sourceMap) {
                //     const extractComments = [];
                //
                //     const{error, map, code, warning} = require('uglify-module')
                //         .minify(file, {
                //
                //         });
                //     return {error, map, code, warning, extractComments};
                // }
            })
        ]
    }
};