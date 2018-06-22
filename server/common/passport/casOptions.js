/* eslint-disable arrow-body-style */
/**
 * @author Candice
 * @date 2018/6/21 16:50
 */
import passport from './passportOptions';
import { PATH } from '../../../common/config/local_api';
import { PORT } from '../helpers/env_helper';

/**
 *
 * @returns {*}
 */
const casServicePrefix = () => `http://localhost:${PORT}`;

const casOptions = logger => ({
  ignore: [/\/ignore/], // 跳过cas相关逻辑
  servicePrefix: casServicePrefix(),
  serverPath: passport.host(), // cas server的根路径
  paths: {
    validate: PATH.page.validate,
    serviceValidate: passport.path.validate,
    proxy: '',
    login: passport.path.login,
    logout: passport.path.logout,
    proxyCallback: ''
  },
  restletIntegration: null,
  redirect: true,
  gateway: false,
  renew: false,
  slo: true,
  fromAjax: {
    header: 'x-client-ajax',
    status: 418 // 针对ajax请求情景，登录校验不通过时返回状态码
  },
  logger: (req, level, ...args) => logger.debug.bind(logger.debug, ...args)
});
export default casOptions;
