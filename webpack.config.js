const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-source-map', // to show, where is my code in bundle
  output: {
    path: path.resolve(__dirname, 'public'), // __dirname - node global variable
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true // ~client should handle routes if unknown
    // not in production! just a dev trick
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'] // order of checking files
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre', // do before transpiling
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        // js or jsx ===> babel,
        // 'test' ~ 'check whether it matches'
        loaders: ['babel-loader']
      }
    ]
  }
};
