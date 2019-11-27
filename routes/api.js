const Router = require("koa-router"); //Koa2 路由导入
const router = new Router(); //实例化路由
const mysql = require("../Mysql/mysql");

//爬虫的配置
const superagent = require('superagent');
//const superagent = require('superagent-charset')(request)
const cheerio    = require("cheerio");

/**
 * 专门写服务器Api接口
 * 
 */
router.get("/newslist", async (ctx, next) => {
    console.log(ctx.query.page)
    if( ctx.query.page <=5 ){ 
        ctx.response.body = {
            total:6,
            data:[
                {
                    id:1,
                    titie:"东契奇成为史上第二快拿到2000+500+500的球员",
                    pageview:65489,
                    tag:"建业美嘉",
                    imgurl:"https://p3.pstatp.com/list/190x124/pgc-image/Rimtmcj5HC0UCj"
                },
                {
                    id:2,
                    titie:"44投15中！为什么你就不尝试做些改变？还当自己是老大？太天真了",
                    pageview:564682,
                    tag:"建业美嘉",
                    imgurl:"https://p1.pstatp.com/list/190x124/pgc-image/f913c8cd51d345008d69bd2f676d7242"
                },
                {
                    id:3,
                    titie:"3连败不可怕，哈登卡佩拉让两大奖项失去悬念，威少居功至伟",
                    pageview:6548926,
                    tag:"建业美嘉",
                    imgurl:null,
                    choose:"精选"
                },
                {
                    id:4,
                    titie:"手臂都划伤了！詹姆斯强硬回应得不到哨子，这下萧华又有麻烦了",
                    pageview:6548926,
                    tag:"建业美嘉",
                    imgurl:"https://p1.pstatp.com/list/190x124/pgc-image/dc2fef72a8ca4b70817fe2f1d2731827"
                },
                {
                    id:5,
                    titie:"三分8中0！利拉德回更衣室路上终于发飙，矛头对准安东尼！",
                    pageview:6548926,
                    tag:"建业美嘉",
                    imgurl:"https://p1.pstatp.com/list/190x124/pgc-image/dc2fef72a8ca4b70817fe2f1d2731827"
                },
                {
                    id:6,
                    titie:"腾讯程序员裸辞3个月，送外卖谋生：比面子更重要的，是活下去",
                    pageview:55648,
                    tag:"建业美嘉",
                    imgurl:null,
                    choose:"精选"
                },
            ]
        }    
    }else{
        //没有更多...
        ctx.response.body ={
            total:0,
            data:[]
        }

    }

})



//向外暴露Api接口
module.exports = router;