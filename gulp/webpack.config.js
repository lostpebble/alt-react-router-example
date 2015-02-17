var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/js/index'
    ],
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx?harmony'], exclude: /node_modules/ }
        ]
    }
};
