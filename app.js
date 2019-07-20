const Koa = require("koa"); 
const app = new Koa();
const cors = require('koa2-cors'); //允许跨域。
const bodyParser = require('koa-bodyparser'); //用于Post提交的中间件
const Api = require("/Koa2/routes/upload"); //导入上传模块 连同 Api接口模块 执行 


app.use(cors());//允许跨域
app.use( bodyParser() );//Post请求的中间件

app.use(Api.routes()); // Koa2 注册路由

app.listen(80, function () {
    console.log("node 服务器已经启动！ 默认端口：80");
});
