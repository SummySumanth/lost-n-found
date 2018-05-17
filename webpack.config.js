let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRootPlugin = require('html-webpack-root-plugin');
const moduleObj = {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders:['css-loader','sass-loader']
        }
    ],
};

module.exports = {
    entry : './view/js/index.jsx',
    mode: 'development',
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist/public')
    },
    resolve : {
        extensions:['.js','.jsx']
    },
    module: moduleObj,
    plugins: [
      new HtmlWebpackPlugin({ 
        title:"Summy's Boilerplate", 
        hash: true,
      }),
      new ReactRootPlugin()
    ]
};

