function getUserInfo() {
  $.ajax({
    type: "GET",
    url: "/my/userinfo",
    // headers: {
    //   Authorization: localStorage.getItem("token"),
    // },
    success: (res) => {
      //   console.log(res);
      if (res.status !== 0) return layer.msg("获取用户信息失败");
      layer.msg("获取用户信息成功！");
      renderAvatar(res.data);
    },
  });
}

const renderAvatar = (user) => {
  let uname = user.nickname || user.username;
  $("#welcome").html(`欢迎${uname}`);
  if (user.user_pic !== null) {
    $(".text-avatar").hide();
    $(".layui-nav-img").attr("src", user.user_pic);
  } else {
    $(".layui-nav-img").hide();
    $(".text-avatar").html(uname[0].toUpperCase());
  }
};

$("#btnquit").click(() => {
  layer.confirm("确定退出登录？", { icon: 3, title: "提示" }, function () {
    localStorage.removeItem("token");
    location.href = "/login.html";
  });
});

getUserInfo();

function change() {
  $('#change').attr('class','layui-this').next().attr('class','')
}
