// 鼠标移入
$(".lbt").mouseenter(function () {
  $(".prev").css({
    display: "block",
  });
  $(".next").css({
    display: "block",
  });
  clearInterval(bannerMove);
});
$(".lbt").mouseleave(function () {
  $(".prev").css({
    display: "none",
  });
  $(".next").css({
    display: "none",
  });
  bannerMove = setInterval(function () {
    $(".next").click();
  }, 2000);
});
// 轮播图滚动
$(".ool li").mouseenter(function () {
  let index = $(this).index();
  $(".uul").animate({
    left: -index * 1535,
  });
  $(this).addClass("active").siblings().removeClass("active");
});
// 点击左右按钮
let num = 0;
$(".next").on("click", function () {
  num++;
  if (num > $(".uul li").length - 1) {
    num = 0;
    $(".uul").css({
      left: "0",
    });
  }
  $(".uul").animate({
    left: -num * 1535,
  });
  $(".ool li").eq(num).addClass("active").siblings().removeClass("active");
});
$(".prev").on("click", function () {
  if (num == 0) {
    num = $(".uul li").length - 1;
    $(".uul").css({
      left: -num * 1535,
    });
    console.log(num);
  } else {
    num--;
    $(".uul").animate({
      left: -num * 1535,
    });
  }
  $(".ool li").eq(num).addClass("active").siblings().removeClass("active");
});
let bannerMove = setInterval(function () {
  $(".next").click();
}, 2000);

// 点击左侧导航添加类名
$('.tabs-list h5').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
})
// 职位分类点击事件
$('.zw-list a').on('click',function(){
    $(this).addClass('active1').siblings().removeClass('active1')
})
// 
$('.zw-list .wid').on('click',function(){
    $(this).addClass('active2').siblings().removeClass('active2')
})