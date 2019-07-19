const Koa = require("koa");
const Router = require("koa-router");//引进koa 路由
const app = new Koa();
const router = new Router(); //实例化路由
const cors = require('koa2-cors'); //允许跨域。

router.get("/getData", async (ctx, next) => {
    //this.set('Access-Control-Allow-Origin','*');
  
    let obj = [ 
                { name: "李程", addr: "广西横县新福镇冲表村11号", age: 23 }, 
                { name: "克格莫", addr: "虚空领域", age: 23 },
                { name: "亚索", addr: "艾欧尼亚", age: 23 },
                { name: "盖伦", addr: "德玛西亚", age: 23 },
            ];
            
    console.log(ctx.request.query );        
    ctx.response.body = ctx.request.query


})

app.use(cors());//允许跨域
app.use(router.routes());

app.listen(8080, function () {
    console.log("已经启动服务了....");
});
