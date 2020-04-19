// 顶部导航
var windowTop=0
$(window).scroll(function(){
    let scrollS=$(this).scrollTop()
    if(scrollS>=windowTop){
        $('.header').slideUp();
        windowTop=scrollS
    }else{
        $('.header').slideDown()
        windowTop=scrollS
    }
})

// 轮播图
