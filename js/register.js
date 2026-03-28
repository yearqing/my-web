// 注册页面正式版 - 无任何测试弹窗
function doRegister() {
  // 获取表单数据
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  var repassword = document.getElementById("repassword").value.trim();

  // 前端验证
  if (!username) {
    alert("用户名不能为空");
    return;
  }
  if (!password || password.length < 6) {
    alert("密码至少6位");
    return;
  }
  if (password !== repassword) {
    alert("两次密码不一致");
    return;
  }

  // 提交注册
  fetch("http://8.137.197.239:5000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      nickname: username
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.code === 200) {
      alert("注册成功！即将返回首页...");
      setTimeout(() => {
        window.location.href = "/index.html";
      }, 2500);
    } else {
      alert("注册失败：" + data.msg);
    }
  })
  .catch(() => {
    alert("网络异常，请稍后重试");
  });
}