/* eslint no-console: 0 */

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import config from './webpack.config.renderer';


const app = express();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;

const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

app.use(webpackDevMiddlewareInstance);

const server = app.listen(PORT, 'localhost', error => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  webpackDevMiddlewareInstance.close();
  server.close(() => {
    process.exit(0);
  });
});
