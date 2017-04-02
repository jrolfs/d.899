import webpack from 'webpack';
import merge from 'webpack-merge';
import config from './webpack.config.base';


const port = process.env.PORT || 3000;
const environment = process.env.ENV || 'development';
const renderers = require.context('./src/javascript/renderers', true, /^\.\/.*\.js$/).keys();

console.log(renderers); /* eslint no-console: 0 */

export default merge(config, {
  debug: true,

  devtool: 'source-map',

  entry: [
    'babel-polyfill'
  ],

  output: {
    publicPath: `http://localhost:${port}/build/renderers/`
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(environment) })
  ],

  target: 'electron-renderer'
});
