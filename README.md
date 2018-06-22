### 路由策略
路由完全由client端控制
扩展空间：如果存在特殊url路由，server端单独控制

### 页面渲染
页面由client端SPA异步渲染
扩展空间：如果存在特殊的需要SEO的页面，由server端通过模板或者renderToString方法进行服务端渲染


### passport接入与权限控制
服务端进行passport接入：
1. json接口：通过状态码区分登录状态
2. 服务端渲染：直接进行页面重定向


### logger
服务端进行日志


### webpack
开发环境：
1. client端 使用webpack-dev-middleware开启开发服务器，使用webpack-hot-middleware热加载提升开发体验
2. server端 执行es6源码，通过 nodemon自动重启，提升开发体验

产品环境：
1. client端，使用webpack编译浏览器环境代码
2. server端，使用babel命令编译node环境代码
