/**
 * 
 * 李程
 * 2019-08-03
 * 
 * 封装处理Mysql数据的增删查改的 操作的方法  
 * 封装、暴露方法
 * 
 * */
const mysql = require('mysql');
const Mysql_config = require("./Mysql_config"); 

//封装、暴露方法
module.exports  = {
    query:function( sql,params,callback){
        //每次使用的时候需要创建数据库链接， 完成操作之后要关闭连接。  
        let connection = mysql.createConnection(Mysql_config);
        connection.connect( function(err){
            //数据库报错进行提醒处理。
            if(err){
                console.log("数据库链接失败了",new Date());
                throw err
            }
            //开始数据库操作
            //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数是回调函数
            connection.query( sql,params,function(err,results,fields ){
               if(err){
                 console.log("数据库操作失败",new Date());
                 throw err;
               } 
               //将查询出来的数据返回给回调函数
               callback && callback(results,fields);
               //resluts 是数据库操作后的结果，fields是数据库链接的一些字段

               //停止链接数据库，必须查询语句后，不然在数据操作的时候会导致数据操作失败。
               connection.end( function(err){
                  if(err){
                    console.log("关闭数据库连接失败！");
                    throw err;
                  }
               });

            }) 

        });

    }


}
