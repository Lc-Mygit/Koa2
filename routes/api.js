const Router = require("koa-router"); //Koa2 路由导入
const router = new Router(); //实例化路由
const mysql = require("../Mysql/mysql");
/**
 * 专门写Api接口
 * 
 */
router.get("/getuser", async (ctx, next) => {
    //数据库查询是异步，要运用 async await 才能取到值
    /*let temp = await mysql.query('select * from users',null,function(res,fields){
        console.log("查询的结果是：");
        console.log(res[0].username);
    
    });*/   //'insert into users (user_ip,username,nickname,password,email )VALUES(?,?,?,?,?)'

    let reslut =  await mysql.query("SELECT * FROM users");
    reslut    
    ctx.response.body ={
        status:true,
        msg:"成功获取用户的信息",
        data:reslut
    };

});

/**
 * 博客登录注册的接口
 *  register 
 * 
 * */

router.post("/user/login" , async(ctx,next )=>{
    console.log("6666666")
    console.log( ctx.request.body )

    //查询数据库
    let reslut =  await mysql.query("SELECT * FROM users");

    if(reslut && reslut.length > 0 ){ 
        for(let i=0;i<reslut.length;i++){
            let item =reslut[i];
            if( item.username === ctx.request.body.username && item.password === ctx.request.body.password ){
                ctx.response.body ={
                    status:true,
                    msg:"成功登录",
                    data:null
                };
            }else{
                ctx.response.body ={
                    status:false,
                    msg:"用户名或密码不正确",
                    data:null
                };
            }
        }
    }    
    
})




//向外暴露Api接口
module.exports = router;