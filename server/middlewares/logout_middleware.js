/**
 * Created by candice on 2017/5/19.
 */

import logger from '../common/logger';

/**
 * 单点登出中间件，对passport登出回调进行处理
 */
const logoutMiddleware = function logoutMiddleware() {
  return (req, res, next) => {
    let logoutRequest = req.body.logoutRequest || '';
    let m = logoutRequest.match(/<samlp:SessionIndex>(.*)<\/samlp:SessionIndex>/);
    logger.debug(`logoutRequest:${logoutRequest}`);

    if (m && m.length === 2) {
      let st = m[1];
      logger.debug(`st:${st}`);

      // 根据st对sessions进行删除（对应有两条记录）
      req.sessionStore.get(st, (err, result) => {
        logger.debug(`st result:${JSON.stringify(result)}`);
        req.sessionStore.destroy(st);
        if (result) {
          let sid;
          if (result.session) {
            sid = JSON.parse(result.session).sid;
          } else if (result.sid) {
            sid = result.sid;
          }
          if (sid) {
            logger.debug(`sid:${sid}`);
            req.sessionStore.destroy(sid);
          }
        }
        // debugLogger.debug('req.session:' + JSON.stringify(req.sessionStore));
      });
    }
    next();
  };
};
export default logoutMiddleware;
