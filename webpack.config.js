const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = Path.resolve(__dirname, './src');
const dist = Path.resolve(__dirname, './dist');

const config = {
    entry: Path.resolve(src, 'index.js'),
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' }), new CopyWebpackPlugin({ patterns: [{ from: 'images', to: 'images' }] })],
    performance: {
        maxEntrypointSize: 2048000,
        maxAssetSize: 2048000
    },
    devServer: {
        contentBase: dist,
        compress: true,
        port: 1234
    }
}

module.exports = config;
