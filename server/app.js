/**
 * @author Candice
 * @date 2018/6/20 14:16
 */
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connectMongo from 'connect-mongo';
import ConnectCas from 'connect-cas2';

import casOptions from './common/passport/casOptions';
import sessionOptions from './common/config/sessionOptions';
import { PATH } from '../common/config/local_api';
import mongoConn from './common/mongo/mongoConn';

import logoutMiddleware from './middlewares/logout_middleware';
import { authStateMiddleware } from './middlewares/user_middleware';

import helloController from './controllers/hello_controller';

import logger from './common/logger';

const MongoStore = connectMongo(session);

const useApp = app => {
  // session and connect CAS
  app.use(cookieParser());
  const mongoStore = new MongoStore({
    mongooseConnection: mongoConn
  });
  app.use(session(sessionOptions(mongoStore)));
  const casClient = new ConnectCas(casOptions(logger));
  app.use(casClient.core());

  // NOTICE: If you want to enable single sign logout, you must use casClient middleware before bodyParser.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(PATH.page.logout, casClient.logout());
  app.use(PATH.page.casLogout, logoutMiddleware());

  app.use(authStateMiddleware); // 传递登录状态给view

  app.use('/api/hello', helloController);
};
export default useApp;
