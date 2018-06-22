/**
 * @author Candice
 * @date 2018/6/21 16:51
 */
import { isProdConfig } from '../helpers/env_helper';

const passport = {
  host() {
    if (isProdConfig()) {
      return 'https://passport.xxx.com';
    }
    return 'http://192.168.1.1:8000';
  },
  path: {
    login: '/sso/login',
    logout: '/sso/logout',
    register: '/sso/reg',
    validate: '/sso/serviceValidate',

    usercenter: '/usercenter'
  },

  getLoginUrl() {
    return this.host() + this.path.login;
  },
  getRegisterUrl() {
    return `${this.host() + this.path.register}?step=1`;
  },
  getUserCenterUrl() {
    return this.host() + this.path.usercenter;
  },
  getJsonpUrl() {
    return `${this.host() + this.path.login}?gateway=true&rt=1`;
  }
};
export default passport;
