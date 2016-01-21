const path = require('path');
const webpack = require('webpack');

const config = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'eventsource-polyfill',
        'entries/home.js'
    ],
    output: {
        path: path.join(__dirname),
        filename: 'home.js',
        publicPath: '/bundle/'
    },
    resolve: {
        root: path.resolve(__dirname + '/app')
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    }
};

module.exports = config;
