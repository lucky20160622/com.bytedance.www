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
// 回到顶部 对应相应的位置
$('.qywh11').click(function(){
    window.scrollTo({ 
        top: 900, 
        behavior: "smooth" 
    });
})
$('.ddsj11').click(function(){
    window.scrollTo({ 
        top: 1800, 
        behavior: "smooth" 
    });
})
$('.aaii').click(function(){
    window.scrollTo({ 
        top: 2450, 
        behavior: "smooth" 
    });
})
// 显示隐藏
$('.bblock').mouseenter(function(){
    $('.footer-bottom-top').css({
        'display':'block'
    })
})
$('.footer-bottom-top').mouseleave(function(){
    $('.footer-bottom-top').css({
        'display':'none'
    })
})