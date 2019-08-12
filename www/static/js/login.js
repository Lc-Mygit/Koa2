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
        $(".active").html("登录");
        if(onoff){
            $(".confirm").animate({"height":"0"});
            new TipBox({type:'success',str:'登录。',hasBtn:true});
                $.ajax({
                type:"POST",
                url:"http://192.168.1.5:88/user/login",
                data:{
                    username:$("#user").val(),
                    password:$("#passwd").val()
                },
                success: function(res){
                       console.log(res) 
                }
            })
         


        }else{
            $(".confirm").animate({"height":"51px"});
            onoff = !onoff;

        }
       
    }); 
    
    //注册按钮的操作
    $(".Signin").click( function(){
        $(".active").html("注册");
        if (onoff) {
            $(".confirm").animate({"height":"51px"});
            new TipBox({type:'success',str:'注册',hasBtn:true});
        }else{
            $(".confirm").animate({"height":"0"});
            
            onoff = !onoff;
        }
       
    });
   
    







 });