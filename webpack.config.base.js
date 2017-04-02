export default {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.json']
  },

  plugins: [],
  externals: []
};
