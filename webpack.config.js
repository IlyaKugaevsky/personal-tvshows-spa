const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map', // to show, where is my code in bundle
  output: {
    path: path.resolve(__dirname, 'public'), // __dirname - node global variable
    filename: 'bundle.js'
  },
  devServer: {
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
