/* eslint-disable import/prefer-default-export */

/**
 * 根据服务端范围的loginUrl转换成页面的登录地址
 * @param loginUrl
 */
export function login(loginUrl) {
  window.location.href = `${loginUrl.split('service=')[0]}service=${window.location.origin +
    window.location.pathname}`;
}
