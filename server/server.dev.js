/**
 * @author Candice
 * @date 2018/6/20 14:16
 */

/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../tools/webpack.config.dev';
import { PORT } from './common/helpers/env_helper';
import logger from './common/logger';
import useApp from './app';

const app = express();
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(
  webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  })
);

// 注：无需设置静态文件，webpackDevMiddleware publicPath已经处理

// Webpack hook event:读取打包后的assets中index.html文件内容
let indexSource;
compiler.plugin('emit', (compilation, callback) => {
  const assets = compilation.assets;
  Object.keys(assets).forEach(key => {
    if (key.match(/\.html/)) {
      indexSource = assets[key].source();
      // console.log(indexSource);
    }
  });
  callback();
});

// common use app
useApp(app);

// Important part. Send down index.html for all requests(history api fallback)
// 注：webpack中间件，会影响到cas的/路径跳过了cas校验逻辑，production不受影响
app.use('/', (req, res) => {
  res.send(indexSource);
});

app.listen(PORT, '0.0.0.0', () => {
  logger.debug(`Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
});
