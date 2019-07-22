const Koa = require("koa"); 
const app = new Koa();
const cors = require('koa2-cors'); //允许跨域。
const bodyParser = require('koa-bodyparser'); //用于Post提交的中间件
const Api = require("./routes/upload"); //导入上传模块 连同 Api接口模块 执行 
const static = require("koa-static");//让服务器资源可被外部访问。
const path = require("path"); //路径


app.use(cors());//允许跨域
app.use( bodyParser() );//Post请求的中间件
app.use(Api.routes()); // Koa2 注册路由
// 挂载日志模块
app.use( (ctx, next) => {
    ctx.util = {
        log: require('./utils/log')
    }
  //  await next()
})

// 记录日志
app.use( (ctx, next) => {
	ctx.util.log.info('Something important')
	//await next()
})

//app.use(static(path.join(__dirname +'./static/images' ) ));//配置静态web服务的中间件
app.use(  static('./static/') );

app.listen(8080, function () {
    console.log("node 服务器已经启动！",new Date());
});
