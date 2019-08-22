const Router = require("koa-router"); //Koa2 路由导入
const router = new Router(); //实例化路由
const mysql = require("../Mysql/mysql");

//爬虫的配置
const superagent = require('superagent')
//const superagent = require('superagent-charset')(request)
const cheerio    = require("cheerio");

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
 * @param username 用户名  
 * @param password 密码
 * */

router.post("/user/login" , async(ctx,next )=>{
    
    console.log( ctx.request.body )
    //查询数据库
    let reslut =  await mysql.query("SELECT * FROM users");
    
    if(reslut && reslut.length > 0 ){ 
        for(let i=0;i<reslut.length;i++){
            let item =reslut[i];
          
            if( item.username === ctx.request.body.username){
                console.log( item.username === ctx.request.body.username , "序号"+i )
                if(item.password === ctx.request.body.password){
                        ctx.response.body ={
                            status:true,
                            msg:"成功登录",
                            data:null
                        };
                }else{
                    ctx.response.body ={
                        status:false,
                        msg:"密码不正确！",
                        data:null
                    };
                }
                //获取到true  就直接退出循环
                break; 
            }else{
                ctx.response.body ={
                    status:false,
                    msg:"用户名不正确",
                    data:null
                };
            }
        }
    }    
});


//register


//简单的爬虫demo
router.get("/getWebSpider", async (ctx, next) => {
    function GetData(){ 
        return new Promise( (resolve,reject)=>{
            let url ="http://www.28404.com/";
            superagent.get(url)
           // .charset('utf-8') //当前页面编码格式
            .end( (err,res)=>{
                if(err){
                    console.log(err);
                    return
                }
                //获取页面文档数据
                let $ = cheerio.load(res.text);


                let DataArr = [];
                let TypeArr = [];
              
                $(".warp-all .thead-02 h2 a").each( function(index,item){
                    TypeArr.push( $(this).text() )
                })
                //洗数据 文章类型
                TypeArr = TypeArr.map( item=>{
                    return {
                        ArticlesType:item,
                        titleArr:[]
                      }
                });
                TypeArr.forEach( (item,index)=>{
                  
                    $(".warp-all .column-mr20-08 .article h3 a").each( function(){
                        TypeArr[0].titleArr.push($(this).text());
                     });
                   

                });
                

                console.log( TypeArr )
                //$("#pane-news li").text()
                resolve(TypeArr) //内容页面
          })
        });   
    }    


    let sndData = await GetData();
    ctx.response.body =  {
        status:true,
        msg:"成功爬取内容",
        data:sndData
    } 
   

});


//向外暴露Api接口
module.exports = router;