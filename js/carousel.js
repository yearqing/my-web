// ==== 轮播图 自动轮播===
$(function(){
    var index=0;/* 标记当前图片的索引 */
    var f;
    dingshiqi();
    function dingshiqi(){
        f=setInterval(function(){
        if(index==$(".site-content .site-slider a").length-1){
            index=0;
            $(".site-content .site-slider a").css("opacity","0"); /* opacity属性只有0和1，0隐藏1显示 */
            $(".site-content .site-slider a").eq(index).css("opacity","1"); /* 找到容器下的图片 */ /* eq(index)找到索引 */
            $(".site-content .slider-item span").css("background-color","#ccc");
            $(".site-content .slider-item span").eq(index).css("background-color","#fff");
        }else{
            index++;
            $(".site-content .site-slider a").css("opacity","0");
            $(".site-content .site-slider a").eq(index).css("opacity","1");
            $(".site-content .slider-item span").css("background-color","#ccc");
            $(".site-content .slider-item span").eq(index).css("background-color","#fff");
        }
        
    },2500)
    }

    $(".site-content .site-slider .prev").click(function(){ /* 左轮播点击事件 */
        clearInterval(f);
        if(index==0){
            index=$(".site-content .site-slider a").length-1;
            $(".site-content .site-slider a").css("opacity","0");
            $(".site-content .site-slider a").eq(index).css("opacity","1");
            $(".site-content .slider-item span").css("background-color","#ccc");
            $(".site-content .slider-item span").eq(index).css("background-color","#fff");
            dingshiqi();
        }
        else{
            index--;
            $(".site-content .site-slider a").css("opacity","0");
            $(".site-content .site-slider a").eq(index).css("opacity","1");
            $(".site-content .slider-item span").css("background-color","#ccc");
            $(".site-content .slider-item span").eq(index).css("background-color","#fff");
            dingshiqi();
        }
    })
    $(".site-content .site-slider .yqh").click(function(){ /* 右轮播点击事件 */
        clearInterval(f);
        if(index==$(".site-content .site-slider a").length-1){
        index=0;
        $(".site-content .site-slider a").css("opacity","0");
        $(".site-content .site-slider a").eq(index).css("opacity","1");
        $(".site-content .slider-item span").css("background-color","#ccc");
        $(".site-content .slider-item span").eq(index).css("background-color","#fff");
        dingshiqi();
        }
        else{
            index++;
            $(".site-content .site-slider a").css("opacity","0");
            $(".site-content .site-slider a").eq(index).css("opacity","1");
            $(".site-content .slider-item span").css("background-color","#ccc");
            $(".site-content .slider-item span").eq(index).css("background-color","#fff");
            dingshiqi();
        } 
    })

    /* 圈圈事件 */
    $(".site-content .slider-item span").click(function(){
        clearInterval(f);
        var indexx=$(this).index();
        index=indexx;
        $(".site-content .site-slider a").css("opacity","0");
        $(".site-content .site-slider a").eq(index).css("opacity","1");
        $(".site-content .slider-item span").css("background-color","#ccc");
        $(".site-content .slider-item span").eq(index).css("background-color","#fff");
        dingshiqi();
    })



})


// 页面加载后自动显示登录/注册
window.onload = function(){
    // 获取登录区域
    let loginArea = document.getElementById("login-area");

    // 显示 登录 | 注册
    loginArea.innerHTML = `
        <a href="javascript:showLogin()">登录</a>
        <span>|</span>
        <a href="/page/zc/zc.html">注册</a>
    `;
};

// 登录弹窗（简单版）
function showLogin(){
    let username = prompt("请输入账号");
    let password = prompt("请输入密码");
    userLogin(username,password);
}

// 登录请求
async function userLogin(username,password){
    if(!username || !password){
        alert("请输入账号密码");
        return;
    }

    let res = await fetch("http://192.168.0.59:8000/api/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            password:password
        })
    });

    let data = await res.json();
    alert(data.msg);

    if(data.code == 200){
        localStorage.setItem("loginUser",JSON.stringify(data.user));
        location.reload();
    }
}