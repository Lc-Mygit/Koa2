const Koa = require("koa");
const Router = require("koa-router");//引进koa 路由
const app = new Koa();
const router = new Router(); //实例化路由
const cors = require('koa2-cors'); //允许跨域。
const koaBody = require('koa-body'); //上传文件的中间件
const bodyParser = require('koa-bodyparser'); //用于Post提交的中间件
const fs = require("fs");

router.get("/getData", async (ctx, next) => {
       
    let obj = [ 
                { name: "李程", addr: "广西横县新福镇冲表村11号", age: 23 }, 
                { name: "克格莫", addr: "虚空领域", age: 23 },
                { name: "亚索", addr: "艾欧尼亚", age: 23 },
                { name: "盖伦", addr: "德玛西亚", age: 23 },
            ];
                  
    ctx.response.body = obj;


})

app.use(cors());//允许跨域
app.use( bodyParser() );//Post请求的中间件

//使用文件上传
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));

//文件上传的Api操作
router.post('/uploadfile', async (ctx, next) => {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = "上传成功！";
});


app.use(router.routes());

app.listen(8080, function () {
    console.log("已经启动服务了....");
});
