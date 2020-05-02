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
  // 点击按钮
  $('.checkbox1').on('click',function(){
    $(this).siblings('.checkbox2').show().parent().siblings().children('.checkbox2').hide()
    $('.list-title span').addClass('colorr')
  })
  $('.list-title span').on('click',function(){
    $('.checkbox2').hide()
    $('.list-title span').removeClass('colorr')
  })