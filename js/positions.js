// 页面滚动 导航固定
let contentTop=$('.content').offset().top 
console.log(contentTop);
$(window).scroll(function(){
    let scrollS=$(this).scrollTop()
    console.log(scrollS);
    if(scrollS>=350){
        console.log(1);
        $('.searchone').addClass('bblock')
    }else{
        $('.searchone').removeClass('bblock')
    }
})
// 
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
  