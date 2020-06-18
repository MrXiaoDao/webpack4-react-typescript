const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// "@babel/preset-typescript"
module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|pcss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')()
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')()
                        ]
                    }
                }, 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: '127.0.0.1',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip
        port: '8888',
        contentBase: './dist',
        hot: true,
        open: true
    }
};