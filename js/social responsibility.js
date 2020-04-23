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
$('.wh').click(function(){
    window.scrollTo({ 
        top: 30, 
        behavior: "smooth" 
    });
    console.log(1);
})
$('.yz').click(function(){
    window.scrollTo({ 
        top: 700, 
        behavior: "smooth" 
    });
})
$('.xx').click(function(){
    window.scrollTo({ 
        top: 2700, 
        behavior: "smooth" 
    });
})
$('.kcx').click(function(){
    window.scrollTo({ 
        top: 4000, 
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