const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = Path.resolve(__dirname, './src');
const dist = Path.resolve(__dirname, 'dist');

const config = {
    entry: Path.resolve(src, 'index.js'),
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' }, 
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }, 
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' }), new CopyWebpackPlugin([{ from: 'images', to: 'images' }])],
    devServer: {
        contentBase: dist,
        compress: true,
        port: 1234
    }
}

module.exports = config;
