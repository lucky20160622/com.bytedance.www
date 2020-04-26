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
  if ($(window).scrollTop()>=1400) {
    $(".zw span").stop(true).animate({ top: "30px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=1600) {
    $(".zw1 span").stop(true).animate({ top: "30px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=2000) {
    $(".title3").stop(true).animate({ top: "0px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=2900) {
    $(".title4").stop(true).animate({ top: "-50px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=2300) {
    $(".right3").stop(true).animate({ top: "0px" }, "slow");
}
});

// 动画
let flag=true
$(window).scroll(function () {
if(flag){
  if ($(window).scrollTop()>=2300) {
    $('.zzc').addClass('dh1')
}
flag=false
}
});
var scrolltopTemp=document.documentElement.scrollTop||document.body.scrollTop
console.log(scrolltopTemp);
// 排他
$('.product-list a').on('mouseenter',function(){
   $(this).children('img').addClass('active1').parent().siblings().children('img').removeClass('active1')
   $(this).children('div').addClass('active').parent().siblings().children('div').removeClass('active')
})
$('.bbox1').on('mouseenter',function(){
  $(this).children('img').addClass('active1').parent().siblings().children('img').removeClass('active1')
  $(this).children('span').addClass('active').parent().siblings().children('span').removeClass('active')
})
$('.zw1 a').on('mouseenter',function(){
  $(this).children('img').addClass('active1').parent().siblings().children('img').removeClass('active1')
  $(this).children('span').addClass('active').parent().siblings().children('span').removeClass('active')
})
// tab切换
$('.right3').on('click','.llist',function(){
  $(this).find('.list-title').addClass('open').parent().siblings().find('.list-title').removeClass('open')
  $(this).find('.desc').addClass('bblock1').parent().siblings().find('.desc').removeClass('bblock1')
  
  let index=$(this).index()
  // console.log(index);
  $('.left3').children().eq(index).addClass('bblock2').siblings().removeClass('bblock2')
  console.log($('.left3').eq(index));
   $('.zzc').addClass('dh1')
})

var e = document.querySelector(".zzc");
	e.addEventListener("animationend", function() {
    $('.zzc').removeClass('dh1')
	});