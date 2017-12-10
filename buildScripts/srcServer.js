/*eslint-disable no-console*/
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import open from 'open';
import config from '../webpack.config.dev';

const app = express();
const port = 5001;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log('Some error occured while starting the server');
  } else {
    open(`http://localhost:${port}`);
  }
});
