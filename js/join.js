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

// function getPageScroll() {
//     var xScroll, yScroll;
//     if (self.pageYOffset) {
//       yScroll = self.pageYOffset;
//       xScroll = self.pageXOffset;
//     } else if (document.documentElement && document.documentElement.scrollTop) {
//       yScroll = document.documentElement.scrollTop;
//       xScroll = document.documentElement.scrollLeft;
//     } else if (document.body) {// all other Explorers
//       yScroll = document.body.scrollTop;
//       xScroll = document.body.scrollLeft;
//     }
//     return new Array(xScroll,yScroll)
// }
// console.log(xScroll,yScroll);

var top1 = $(".title1").offset().top; //783
console.log(top1);
let flag = true;
let bodytop = $("body").height(); //7373
$(window).scroll(function () {
  if (flag) {
    if ($(window).scrollTop()>=300) {
      $(".title1").stop(true).animate({ top: "2px" }, "slow");
      flag=false
    }
  }
});
