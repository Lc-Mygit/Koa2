/**
 * @author 李程
 * @Date  2019-08-05
 * 
 *   new TipBox({type:'success',str:'嘿嘿，完成操作了。',hasBtn:true});
 */

$(document).ready(function () {
    //服务器地址
    const HostUrl = "http://192.168.1.5";
    let onoff = true//根据此布尔值判断当前为注册状态还是登录状态

    //登录按钮的操作
    $(".Login").click(function () {
        $(".active").html("登录");
        if (onoff) {
            $(".confirm").animate({ "height": "0" });
            //执行登录请求
            PsotLogin();

        } else {
            $(".confirm").animate({ "height": "51px" });
            onoff = !onoff;

        }

    });

    //注册按钮的操作
    $(".Signin").click(function () {
        $(".active").html("注册");
        if (onoff) {
            $(".confirm").animate({ "height": "51px" });
           // new TipBox({ type: 'success', str: '注册', hasBtn: true });
        } else {
            $(".confirm").animate({ "height": "0" });

            onoff = !onoff;
        }

    });

    /**
     * @description 专门ajax提交用户名 密码 服务器验证
     * @param  username  用户名
     * @param  password  密码
     * 
     * */
    function PsotLogin(){
        //提交之前判断，不能为空。
        if( $("#user").val() && $("#passwd").val() ){  
            //执行提交服务器。
            $.ajax({
                type: "POST",
                url: "http://localhost:88/user/login",
                data: {
                    username: $("#user").val(),
                    password: $("#passwd").val()
                },
                success: function (res){
                    if( res.status ){
                        new TipBox({ type: 'success', str:res.msg, hasBtn: true }); 
                    }else{
                        new TipBox({ type: 'error', str: res.msg , hasBtn: true }); 
                    }
                    console.log(res);
                },
                error:function(err){
                    new TipBox({ type: 'error', str: "故障日志："+ err , hasBtn: true });
                }
            });
           
        }else{
            new TipBox({ type: 'error', str: '用户名或密码不能为空', hasBtn: true }); 
        }        

    }
    /**
     * @description 键盘事件 回车登录。
     */

    $(this).keydown( function(e){
        if(e.which == "13"){
            PsotLogin();
	  	}
    });







});