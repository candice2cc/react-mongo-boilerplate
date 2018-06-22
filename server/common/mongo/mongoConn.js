/**
 * @author Candice
 * @date 2018/6/21 15:16
 */
import mongoose from 'mongoose';
import mongoOptions from './mongoOptions';
import logger from '../logger';

// conenct mongodb
mongoose.connect(
  mongoOptions.connectionString,
  mongoOptions.options
);
const mongoConn = mongoose.connection;

mongoConn.once('connected', () => {
  logger.info('mongodb connect success!!!');
});

mongoConn.on('error', err => {
  logger.error(`mongodb error:${err}`);
});

export default mongoConn;
