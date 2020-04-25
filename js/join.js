// 顶部导航
var windowTop = 0;
$(window).scroll(function () {
  let scrollS = $(this).scrollTop();
  if (scrollS >= windowTop) {
    $(".header").stop().slideUp();
    windowTop = scrollS;
  } else {
    $(".header").stop().slideDown();
    windowTop = scrollS;
  }
});

// 滑动
var top1 = $(".title1").offset().top; //783
console.log(top1);
let bodytop = $("body").height(); //7373
$(window).scroll(function () {
    if ($(window).scrollTop()>=110) {
      $(".title1").stop(true).animate({ top: "2px" }, "slow");
  }
});
// top2
$(window).scroll(function () {
    if ($(window).scrollTop()>=550) {
      $(".product-list div").stop(true).animate({ top: "2px" }, "slow");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=700) {
    $(".section1 button").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=1000) {
    $(".title2").stop(true).animate({ top: "0px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=1200) {
    $(".zw div").stop(true).animate({ top: "0px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=1900) {
    $(".zw1 div").stop(true).animate({ top: "0px" }, "slow");
}
});
var scrolltopTemp=document.documentElement.scrollTop||document.body.scrollTop
console.log(scrolltopTemp);
// 排他
$('.product-list a').on('mouseenter',function(){
   $(this).children('img').addClass('active1').parent().siblings().children('img').removeClass('active1')
   $(this).children('div').addClass('active').parent().siblings().children('div').removeClass('active')
})
$('.zw').on('mouseenter',function(){
  $(this).children('img').addClass('active1').parent().siblings().children('img').removeClass('active1')
  $(this).children('div').addClass('active').parent().siblings().children('div').removeClass('active')
})
$('.zw1').on('mouseenter',function(){
  $(this).children('img').addClass('active1').parent().siblings().children('img').removeClass('active1')
  $(this).children('div').addClass('active').parent().siblings().children('div').removeClass('active')
  console.log(2);
})
