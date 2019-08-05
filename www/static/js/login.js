/**
 * 李程
 * 2019-08-05
 * 
 *   new TipBox({type:'success',str:'嘿嘿，完成操作了。',hasBtn:true});
 */

 $(document).ready( function(){ 
    //服务器地址
    const HostUrl = "http://192.168.1.5";
    let onoff = true//根据此布尔值判断当前为注册状态还是登录状态

    //登录按钮的操作
    $(".Login").click( function(){
        $("#status").html("登录");
        if(onoff){
            $(".confirm").animate({"height":"0"});
           
        }else{
            $(".confirm").animate({"height":"51px"});
            onoff = !onoff;

        }
       
    }); 
    
    //注册按钮的操作
    $(".Signin").click( function(){
        $("#status").html("注册");
        if (onoff) {
            $(".confirm").animate({"height":"51px"});
            $("#status").html("登录");
        }else{
            $(".confirm").animate({"height":"0"});
            
           
            onoff = !onoff;
        }
       
    });
   
  







 });