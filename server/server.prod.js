/**
 * @author Candice
 * @date 2018/6/20 14:16
 */
import express from 'express';
import path from 'path';

import logger from './common/logger';
import { PORT } from './common/helpers/env_helper';
import useApp from './app';

const app = express();

// 对静态文件统一设置一个虚拟路径，方便nginx做代理
app.use('/public', express.static(path.join(__dirname, '../client')));

// common use app
useApp(app);

// Important part. Send down index.html for all requests(history api fallback)
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Listening on port ${PORT}. Open up http://localhost:${PORT}/ in your browser.`);
});
