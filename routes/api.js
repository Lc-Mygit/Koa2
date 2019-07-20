const Router = require("koa-router"); //Koa2 路由导入
const router = new Router(); //实例化路由

/**
 * 专门写Api接口
 * 
 */
router.get("/getData", async (ctx, next) => {
    let obj = [ 
            { name: "李程", addr: "广西横县新福镇冲表村11号", age: 23 }, 
            { name: "克格莫", addr: "虚空领域", age: 23 },
            { name: "亚索", addr: "艾欧尼亚", age: 23 },
            { name: "盖伦", addr: "德玛西亚", age: 23 },
        ];      
    ctx.response.body = obj;
});

router.get("/Myinfo", async (ctx,next) => {
    let obj = [ 
            { name: "李程", addr: "广西横县新福镇冲表村11号", age: 23 }, 
    ];
    ctx.response.body = obj;
});



//向外暴露Api接口
module.exports = router;