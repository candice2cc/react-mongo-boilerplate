/**
 * @author Candice
 * @date 2018/6/4 19:36
 */
export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 8000; // 服务端口号

export const CONFIG_ENV = process.env.CONFIG_ENV;

console.log(`NODE_ENV=${NODE_ENV}`);
console.log(`PORT=${PORT}`);
console.log(`CONFIG_ENV=${CONFIG_ENV}`);

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

export const isDevelopment = function isDevelopment() {
  return NODE_ENV === DEVELOPMENT;
};
export const isProduction = function isProduction() {
  return NODE_ENV === PRODUCTION;
};

export const isDevConfig = function isDevelopmentConfig() {
  return CONFIG_ENV === DEVELOPMENT;
};
export const isProdConfig = function isProductionConfig() {
  return CONFIG_ENV === PRODUCTION;
};
