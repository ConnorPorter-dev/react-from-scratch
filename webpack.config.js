var webpack = require('webpack');
var path = require('path');

// var parentDir = path.join(\_dirname, '../');

module.exports = {
    entry: './src/client/index.jsx',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node\_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // devServer: {
    //     contentBase: parentDir,
    //     historyApiFallback: true
    // }
}
