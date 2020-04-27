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
  if ($(window).scrollTop()>=2300) {
    $(".right3").stop(true).animate({ top: "0px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=2800) {
    $(".title4").stop(true).animate({ top: "-90px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=3100) {
    $("#left4").stop(true).animate({ top: "2px" }, "slow");
}
});

$(window).scroll(function () {
  if ($(window).scrollTop()>=3800) {
    $(".title5-1").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=3900) {
    $(".title-item1").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=4000) {
    $(".title-item2").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=4700) {
    $(".left6").stop(true).animate({ top: "2px" }, "slow");
}
});

$(window).scroll(function () {
  if ($(window).scrollTop()>=5400) {
    $(".title7-1").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=5600) {
    $(".item").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=6200) {
    $(".left8").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=6800) {
    $(".title9").stop(true).animate({ top: "2px" }, "slow");
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=7100) {
    $(".yg").stop(true).animate({ top: "2px" }, "slow");
}
});
// 动画
$(window).scroll(function () {
  if ($(window).scrollTop()>=2300) {
    $('.zzc1').addClass('dh2')
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=3100) {
    $('.zzc2').addClass('dh3')
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=3800) {
    $('.zzc3').addClass('dh3')
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=4700) {
    $('.zzc4').addClass('dh3')
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=5600) {
    $('.zzc5').addClass('dh3')
}
});
$(window).scroll(function () {
  if ($(window).scrollTop()>=6200) {
    $('.zzc6').addClass('dh3')
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
  // 尾部
  $('#wx1').on('mouseenter',function(){
    $('.gzh1').css({
      'display':'block'
    })
  })
  $('#dy1').on('mouseenter',function(){
    $('.gzh2').css({
      'display':'block'
    })
  })
  $('#wx1').on('mouseleave',function(){
    $('.gzh1').css({
      'display':'none'
    })
  })
  $('#dy1').on('mouseleave',function(){
    $('.gzh2').css({
      'display':'none'
    })
  })
  // 返回顶部
  $(window).scroll(function(){
    if($(window).scrollTop()>=2300){
      $('.dbdh').css({
        'display':'block'
      })
    }else{
      $('.dbdh').css({
        'display':'none'
      })
    }
  })
$('.dbdh').on('click',function(){
  $('html,body').animate({
    scrollTop:0
  },'slow')
})
// 导航变色
