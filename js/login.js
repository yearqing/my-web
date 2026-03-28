// 接口地址
const API = "http://8.137.197.239:5000/api";

// 登录
function testLogin() {
  let username = prompt("请输入用户名：");
  let password = prompt("请输入密码：");

  if (!username || !password) {
    alert("用户名密码不能为空！");
    return;
  }

  fetch(API + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.code === 200) {
      alert("登录成功！");
      localStorage.setItem("user", JSON.stringify(data.user));
      location.reload();
    } else {
      alert("登录失败：" + data.msg);
    }
  });
}

// 跳注册
function goRegister() {
  location.href = "./zc.html";
}

// 退出登录
function logout() {
  localStorage.clear();
  alert("已退出登录");
  location.reload();
}

// 页面加载自动判断状态
window.onload = function() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    document.getElementById("unlogin_box").style.display = "none";
    document.getElementById("logined_box").style.display = "inline-block";
    document.getElementById("nickname").innerText = user.nickname;

    // ============== 这里统一使用你服务器的默认头像 ==============
    let avatar = document.getElementById("avatar");
    avatar.src = "/images/avatar.png";

  } else {
    document.getElementById("unlogin_box").style.display = "inline-block";
    document.getElementById("logined_box").style.display = "none";
  }
};