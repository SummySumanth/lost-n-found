let path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
            use: [
              {
                loader: "style-loader" // creates style nodes from JS strings
              },
              {
                loader: "css-loader" // translates CSS into CommonJS
              },
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ]
          }
    ],
};

module.exports = {
    entry : './view/js/index.jsx',
    mode: 'development',
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist/public/')
    },
    resolve : {
        extensions:['.js','.jsx']
    },
    module: moduleObj,
    plugins: [
      new HtmlWebpackPlugin({ 
        title:"Summy's Boilerplate", 
        hash: true,
        inject: false,
        template: 'template.ejs'
      }),
      new BundleAnalyzerPlugin(),
      // new ReactRootPlugin()
    ]
};

