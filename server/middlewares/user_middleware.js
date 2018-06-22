/**
 * Created by candice on 2017/5/26.
 */

/* eslint-disable import/prefer-default-export */

/**
 * 对req.session.cas.attributes进行有效filter
 * @param attr
 * @returns {*}
 */
function filterAttr(attr) {
  if (typeof attr === 'undefined' || attr.length === 0) {
    return '';
  }
  return attr[0];
}

/**
 *
 * @param req
 * @param res:res.locals.authState: 0:未登录；1:已登录;
 * @param next
 */
export const authStateMiddleware = (req, res, next) => {
  if (!req.user) {
    req.user = {};
  }

  let authState;
  if (req.session.cas && req.session.cas.attributes) {
    authState = 1;
    let {
      uuid,
      loginName,
      name,
      username,
      nickName,
      email,
      phone,
      accountType
    } = req.session.cas.attributes;
    req.user = {
      ...req.user,
      uid: filterAttr(uuid),
      loginName: filterAttr(loginName),
      name: filterAttr(name),
      username: filterAttr(username),
      nickName: filterAttr(nickName),
      email: filterAttr(email),
      phone: filterAttr(phone),
      accountType: filterAttr(accountType)
    };
  } else {
    authState = 0;
  }
  res.locals.authState = authState;
  res.locals.user = req.user;
  next();
};
