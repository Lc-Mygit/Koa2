/**
 * 专门写文件上传的Api接口
 * 
 */
const router = require("./api"); //Koa2 路由导入  连同 api文件也一起执行
const multer = require("koa-multer"); //文件上传的中间件
require("koa-static");

//文件上传配置
let storage = multer.diskStorage({
    //文件保存路径
    destination:function(req,file,cb){
        cb(null,"static/images/");
    },
    //修改文件名称
    filename:function(req,file,cb){
        let fileFormat = (file.originalname).split(".");
        cb( null, Date.now() +"." + fileFormat[fileFormat.length - 1]);
    }
});
//加载配置
let upload = multer({storage:storage});

//路由
router.post("/upload", upload.single('file'), async(ctx,next)=>{
    console.log("上传了...")
    ctx.body = {
        filename:ctx.req.file.filename //返回文件名
    }
});

//向外暴露Api接口
module.exports = router;

