/**
 * @author Candice
 * @date 2018/6/21 15:29
 */
const sessionOptions = function sessionOptions(store) {
  return {
    name: 'NSESSIONID',
    secret: 'react-mongo-boilerplate ddd',
    resave: false,
    saveUninitialized: true, // true代表为每个访问的用户记录session，false代表session store中只存储登录用户session.为数据库存储空间考虑
    store
  };
};
export default sessionOptions;
