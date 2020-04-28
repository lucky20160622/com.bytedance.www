// 尾部
$("#wx1").on("mouseenter", function () {
  $(".gzh1").css({
    display: "block",
  });
});
$("#dy1").on("mouseenter", function () {
  $(".gzh2").css({
    display: "block",
  });
});
$("#wx1").on("mouseleave", function () {
  $(".gzh1").css({
    display: "none",
  });
});
$("#dy1").on("mouseleave", function () {
  $(".gzh2").css({
    display: "none",
  });
});

// tab切换
$(".tabs-two").on("click", function () {
  $(".tabs-two").addClass("tabs-dj");
  $(".tabs-one").removeClass("tabs-dj");
  $(".tabs-right").addClass("bblock").prev().removeClass("bblock");
  $(".tabs-left").addClass("nnoe").next().removeClass("nnoe");
  console.log(111);
});
$(".tabs-one").on("click", function () {
  $(".tabs-one").addClass("tabs-dj");
  $(".tabs-two").removeClass("tabs-dj");
  $(".tabs-right").addClass("nnoe").prev().removeClass("nnoe");
  $(".tabs-left").addClass("bblock").next().removeClass("bblock");
});
// $(".tabs-title").on("click", "a", function () {
//   let index = $(this).index();
//   $(this).addClass("tabs-dj").siblings().removeClass("tabs-dj");
//   $(".open")
//     .eq(index)
//     .removeClass(".nnoe")
//     .addClass("bblock")
//     .siblings()
//     .removeClass("bblock")
//     .addClass("nnoe");
// });

//鼠标点击输入框
$("input:text").on("focus", function () {
  let index = $(this).attr("name");
  $("input:text").eq(index).parent().addClass("colora");
  $("input:text").eq(index).parent().siblings().removeClass("colora");
});
// 点击登录
// 如果输入框没有内容，则search边框变红色
//下面出现提示文字
// 左边
$(".tabs-left .logoin a").on("click", function () {
  // 如果俩个输入框都没内容
  if ($(".sr").val().length == "" || $.trim($(".sr").val()).length == 0) {
    $(".ts1").addClass("bblock");
    $(".ts2").addClass("bblock");
    $(".search1").addClass("hs");
    $(".search2").addClass("hs");
  } else {
    $(".ts1").removeClass("bblock");
    $(".ts2").removeClass("bblock");
    $(".search1").removeClass("hs");
    $(".search2").removeClass("hs");
  }
  // 如果第一个输入框没内容
  if (
    $(".sr").eq(0).val().length == "" ||
    $.trim($(".sr").eq(0).val()).length == 0
  ) {
    $(".ts1").addClass("bblock");
    $(".search1").addClass("hs");
  } else {
    $(".ts1").removeClass("bblock");
    $(".search1").removeClass("hs");
  }
  // 如果第二个输入框没内容
  if (
    $(".sr").eq(1).val().length == "" ||
    $.trim($(".sr").eq(1).val()).length == 0
  ) {
    $(".ts2").addClass("bblock");
    $(".search2").addClass("hs");
  } else {
    $(".ts2").removeClass("bblock");
    $(".search2").removeClass("hs");
  }
  console.log(
    $(".sr").eq(0).val().length == "" || $.trim($(".sr").val()).length == 0
  );
  console.log(
    $(".sr").eq(1).val().length == "" || $.trim($(".sr").val()).length == 0
  );
});
// 让输入框亮起
$("input[name=0]").on("keydown", function () {
  if ($("#lq2").val().length == 10) {
    $(".lq1").css({
      background: "#3370ff",
    });
  } else {
    $(".lq1").css({
      background: "#BACDFE",
    });
  }
});

// 右边
$(".tabs-right .logoin a").on("click", function () {
  // 如果俩个输入框都没内容
  if ($(".sr").val().length == "" || $.trim($(".sr").val()).length == 0) {
    $(".ts3").addClass("bblock");
    $(".ts4").addClass("bblock");
    $(".search3").addClass("hs");
    $(".search4").addClass("hs");
  } else {
    $(".ts3").removeClass("bblock");
    $(".ts4").removeClass("bblock");
    $(".search3").removeClass("hs");
    $(".search4").removeClass("hs");
  }
  // 如果第一个输入框没内容
  if (
    $(".sr").eq(2).val().length == "" ||
    $.trim($(".sr").eq(2).val()).length == 0
  ) {
    $(".ts3").addClass("bblock");
    $(".search3").addClass("hs");
  } else {
    $(".ts3").removeClass("bblock");
    $(".search3").removeClass("hs");
  }
  // 如果第二个输入框没内容
  if (
    $(".sr").eq(3).val().length == "" ||
    $.trim($(".sr").eq(3).val()).length == 0
  ) {
    $(".ts4").addClass("bblock");
    $(".search4").addClass("hs");
  } else {
    $(".ts4").removeClass("bblock");
    $(".search4").removeClass("hs");
  }
});
// 让输入框亮起

