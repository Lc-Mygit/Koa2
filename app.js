const Koa = require("koa");
const Router  = require("koa-router");//引进koa 路由
const app = new Koa();
const router = new Router(); //实例化路由
const cors = require('koa2-cors');

router.get("/getData",async(ctx,next)=>{ 
    //this.set('Access-Control-Allow-Origin','*');
    let obj ={name:"李程",addr:"广西横县新福镇冲表村11号"}
   // console.log(  ctx.request.res );
    ctx.response.body = obj


})

app.use(cors());//允许跨域
app.use( router.routes() );

app.listen( 8080 ,function(){ 
    console.log("已经启动服务了....");    
});
