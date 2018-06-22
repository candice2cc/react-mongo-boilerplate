/**
 * @author Candice
 * @date 2018/6/21 16:55
 */
/* eslint-disable import/prefer-default-export */

export const PATH = {
  // 页面相关url path
  page: {
    // cas 相关
    validate: '/cas/validate',
    casLogout: '/cas/logout', // 注销回调

    logout: '/logout' // 注销
  },

  // api请求url path
  api: {
    profile: '/profile', // 查询用户信息

    recommend: {
      list: '/api/recommend/list'
    }
  }
};
