const Koa = require("koa"); 
const app = new Koa();
const cors = require('koa2-cors'); //允许跨域。
const bodyParser = require('koa-bodyparser'); //用于Post提交的中间件
const Api = require("./routes/upload"); //导入上传模块 连同 Api接口模块 执行 
const static = require("koa-static");//让服务器资源可被外部访问。
const path = require("path"); //路径
const mysql = require("./Mysql/mysql"); //运行mysql


app.use(cors());//允许跨域
app.use( bodyParser() );//Post请求的中间件
app.use(Api.routes()); // Koa2 注册路由
app.use(  static('./www') ); //服务器静态资源

const server = require('http').Server(app.callback());
const io = require('socket.io')(server);

//监听客户端链接,回调函数会传递本次链接的socket
io.on('connection', socket => {
    // 监听客户端发送的信息
    socket.on("sentToServer", message => {
        // 给客户端返回信息
        io.emit("sendToClient", {message});
    });
    // 监听连接断开事件
    socket.on("disconnect", () => {
        console.log("连接已断开...");
    });
});



app.listen(88, function () {
    console.log("node 服务器已经启动！",new Date());
    //supervisor app.js  启动
});
