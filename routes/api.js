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
    mysql.query(
        "SELECT * FROM users",
        [],
        function(res,fields){
            console.log("查询的结果是：");
            console.log(res);
                
        }
    )
    let reslut =  await mysql.query("SELECT * FROM users");
    reslut    
    ctx.response.body ={
        status:true,
        msg:"成功获取用户的信息",
        data:reslut
    };

});

router.get("/Myinfo", async (ctx,next) => {
    let obj = [ 
            { name: "李程", addr: "广西横县新福镇冲表村11号", age: 23 }, 
    ];
    ctx.response.body = obj;
});



//向外暴露Api接口
module.exports = router;