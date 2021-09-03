const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.CVA_PORT = process.env.CVA_PORT || 9000;

const config = function (mode) {
  const conf = {
    mode,
    entry: ['./src/index.js'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
        {
          test: /\.html$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'html-loader',
            options: {},
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'public/bundle/'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [],
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
      },
      contentBase: 'public',
      compress: true,
      hot: true,
      port: process.env.CVA_PORT,
    },
  };

  if (mode === 'development') {
    conf.plugins.push(new webpack.HotModuleReplacementPlugin());
    conf.plugins.push(new webpack.NoEmitOnErrorsPlugin());
  }

  return conf;
};

module.exports = config(process.env.NODE_ENV);
